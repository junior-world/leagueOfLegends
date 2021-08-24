/*
 * 여러 API URL 및 JSON 경로를 변수로 지정
 * import * as config from '../config'; 로 import 하여 config.변수명 을 통해 사용
 * 컴포넌트 내부 변수와의 차이점(내부 변수는 카멜 케이스)을 두기 위해서 변수명은 snake case 표기법과 대문자로 지을 것
 */

/*
 * 챔피언 분석 page에서 사용하는 변수들 지정
 */
export const ROTATION_CHAMPION = '/lol/platform/v3/champion-rotations'; //챔피언 로테이션 API


// (소환사 id , 닉네임) 등등 기본정보 url
export const SUMMONER_URL=`/lol/summoner/v4/summoners/by-name/`;

// (소환사 티어 ,승 ,패 ,포인트) 등의 정보 url 
export const ENTRIES_URL =`/lol/league/v4/entries/by-summoner/`;


// ?endIndex=19 20 가져오기  에서 matchId를 가져오고 
// 소환사 최근 게임 가져오기  
// https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?start=0&count=20
// 여긴 match-V5
// export const MATCHLISTS_URL = `/lol/match/v5/matches/by-puuid/` 
 
///lol/match/v4/matchlists/by-account/1tt6BqbDr6XchhkNBASZCvqj7LCPUljgTGCjjxqxMUAo?endIndex=19&beginIndex=0&api_key=
export const MATCHLISTS_URL = `/lol/match/v4/matchlists/by-account/`;


// 해당게임에 대한 내용(아이템,팀원 승, 패 등등) 가져오기 
// https://kr.api.riotgames.com/lol/match/v4/matches/{matchId}
export const MATCHS_URL =`/lol/match/v4/matches/` 


// 모든 스펠 정보  
export const SPELL_DATA = `http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/summoner.json` 
// http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/<spell_name>.png




/***
    ***   모든 룬 정보들
    ***  - 메인 룬 이미지 (format + example)
    ***   https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/<style_name>.png
    ***
    ***   https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png
**/
export const RUNS_DATA = `https://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/runesReforged.json`;



// https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}?api_key={}
export const CHAMPION_MASTERIES = `/lol/champion-mastery/v4/champion-masteries/by-summoner/`;

  //숙련도 레벨별 문양 , 배너
// https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-profiles/global/default/mastery_level2.png
// https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-profiles/global/default/mastery_level2banner.png





  
/*
 * 여러 API URL 및 JSON 경로를 변수로 지정
 * import * as config from '../config'; 로 import 하여 config.변수명 을 통해 사용
 * 컴포넌트 내부 변수와의 차이점(내부 변수는 카멜 케이스)을 두기 위해서 변수명은 snake case 표기법과 대문자로 지을 것
 */

/*
 * 챔피언 분석 page에서 사용하는 변수들 지정
 */


export const ALL_CHAMPION_DATA =
    'https://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/champion.json'; //모든 챔피언 정보

//http://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/champion/<champion_name>.json
export const CHAMPION_DATA =
    'http://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/champion/.json'; //특정 챔피언 정보
//https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/<champion_name>.png
export const CHAMPION_ICON_IMG =
    'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/';
