import { GetRankingAPI } from './getLadder';

/**
 * 래더 정보의 data를 가져와서 소환사 프로필 id를 추출하기 위해
 * sommonerName 정보를 소환사 정보를 조회하는 api에 파라미터로 주어 래더 유저의 정보를 배열로 반환
 * @returns 래더 5순위 유저의 이름 반환
 */
export const GetIconSearch = async () => {
    let rankAPI;
    let userName = [];

    await GetRankingAPI().then((res) => {
        rankAPI = res;
    });

    //래더 정보중 소환사명만 추출하여 배열에 저장
    rankAPI.forEach((v) => {
        userName.push(v.summonerName);
    });

    //챌린저 소환사 중 상위 5명 추출
    const userRanker = userName.filter((v, i) => {
        return i < 20;
    });

    return userRanker;
};

export default GetIconSearch;
