import axios from 'axios';
import * as config from '../../config';

/**
 * riot CHALLENGER_LEAGE API 요청
 * 요청한 API의 data중 freeChampionIds(금주의 로테이션 챔피언 데이터)만을 가져와 반환
 * @returns  freeChampionIds -> 금주의 로테이션 챔피언의 key값
 */

const GetRankingAPI = async () => {
    const {
        data: { entries },
    } = await axios
        .get(
            `${config.CHALLENGER_LEAGE}?api_key=${process.env.REACT_APP_API_KEY}`,
        )
        .catch((Error) => {
            console.log(Error);
        });

    entries.sort(function (a, b) {
        return a.leaguePoints < b.leaguePoints ? 1 : -1;
    });
    // for (const key in entries) {
    //     // if (entries[key].leaguePoints < entries[key + 1].leaguePoints) {
    //     //     entries[key] = entries[key + 1];
    //     // }
    //     console.log(entries[key].leaguePoints);
    // }

    return entries;
};

export default GetRankingAPI;
