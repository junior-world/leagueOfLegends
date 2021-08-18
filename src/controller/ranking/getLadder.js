import axios from 'axios';
import * as config from '../../config';

/**
 * 챌린저 티어의 정보를 담고있는 객체 중 배열을 추출
 * 리그 포인트를 이용하여 내림차순 정렬하여 랭킹순서 정렬 후 배열 반환
 * @returns 챌린저 티어의 정렬된 entries 배열 반환
 */
export const GetRankingAPI = async () => {
    const {
        data: { entries },
    } = await axios
        .get(
            `${config.CHALLENGER_LEAGE}?api_key=${process.env.REACT_APP_API_KEY}`,
        )
        .catch((Error) => {
            console.log(Error);
        });

    //리그포인트로 내림차순 정렬
    entries.sort(function (a, b) {
        return a.leaguePoints < b.leaguePoints ? 1 : -1;
    });

    return entries;
};

export default GetRankingAPI;
