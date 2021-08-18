/*
 * 여러 API URL 및 JSON 경로를 변수로 지정
 * import * as config from '../config'; 로 import 하여 config.변수명 을 통해 사용
 * 컴포넌트 내부 변수와의 차이점(내부 변수는 카멜 케이스)을 두기 위해서 변수명은 snake case 표기법과 대문자로 지을 것
 */

/*
 * 챔피언 분석 page에서 사용하는 변수들 지정
 */
export const PROFILE_ICON =
    'http://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/profileicon.json'; //유저 아이콘 모든 정보
export const CHALLENGER_LEAGE =
    '/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5'; // 챌린저 티어 유저 조회 API
export const ROTATION_CHAMPION = '/lol/platform/v3/champion-rotations'; //챔피언 로테이션 API

export const ALL_CHAMPION_DATA =
    'https://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/champion.json'; //모든 챔피언 정보

//http://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/champion/<champion_name>.json
export const CHAMPION_DATA =
    'http://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/champion/.json'; //특정 챔피언 정보
//https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/<champion_name>.png
export const CHAMPION_ICON_IMG =
    'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/';
