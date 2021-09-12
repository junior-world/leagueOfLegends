import axios from 'axios';
import * as config from '../../config';
import * as Hangul from 'hangul-js';
/**
 * 모든 챔피언의 기본 정보가 담겨있는 Json파일을 요청
 * 초성검색을 위하여 외부라이브러리 사용. for문을 통해 초성 추출 후 객체에 재할당
 * @returns 챔피언의 모든 정보를 data라는 변수로 반환 + 가공을 통해 초성 객체 추가(객체명 -> diassembled)
 */
const GetAllChampData = async () => {
    const {
        data: { data },
    } = await axios.get(config.CHAMPIONS_DATA).catch((err) => {
        if (400 <= err.response.status && err.response.status < 500) {
            console.error(
                `-----${err.response.status}번 에러 -> request 문제-----`,
            );
        } else if (500 <= err.response.status && err.response.status < 600) {
            console.error(
                `-----${err.response.status}번 에러 -> server 문제-----`,
            );
        }
    });

    //객체에 name에서 초성 추출 후 disassembled 객체를 만들어 data 객체에 재할당
    for (const key in data) {
        var dis = Hangul.disassemble(data[key].name, true);
        var cho = dis.reduce((prev, elem) => {
            elem = elem[0] ? elem[0] : elem;
            return prev + elem;
        }, '');
        data[key].diassembled = cho;
    }

    return data;
};

export default GetAllChampData;
