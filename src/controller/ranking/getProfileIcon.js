import axios from 'axios';
import * as config from '../../config';

/**
 * 챌린저 티어의 정보를 담고있는 객체 중 배열을 추출
 * 리그 포인트를 이용하여 내림차순 정렬하여 랭킹순서 정렬 후 배열 반환
 * @returns 챌린저 티어의 정렬된 entries 배열 반환
 */
const GetIconAPI = async () => {
    const {
        data: { data },
    } = await axios.get(config.PROFILE_ICON).catch((Error) => {
        console.log(Error);
    });

    return data;
};

export default GetIconAPI;
