/*
 * 여러 API URL 및 JSON 경로를 변수로 지정
 * import * as config from '../config'; 로 import 하여 config.변수명 을 통해 사용
 * 컴포넌트 내부 변수와의 차이점(내부 변수는 카멜 케이스)을 두기 위해서 변수명은 snake case 표기법과 대문자로 지을 것
 */

/*
 * 챔피언 분석 page에서 사용하는 변수들 지정
 */
export const ROTATION_CHAMPION = '/lol/platform/v3/champion-rotations'; //챔피언 로테이션 API
export const ALL_CHAMPION_DATA =
  'https://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/champion.json'; //모든 챔피언 정보

//http://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/champion/<champion_name>.json
export const CHAMPION_DATA =
  'http://ddragon.leagueoflegends.com/cdn/11.16.1/data/ko_KR/champion/'; //특정 챔피언 정보

//https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/<champion_name>.png
export const CHAMPION_ICON_IMG =
  'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/';

//http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/<champion_name><Q/W/E/R>.png
export const CHAMPION_SKILL_IMG =
  'http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/';

//http://ddragon.leagueoflegends.com/cdn/11.16.1/img/passive/Braum_Passive.png  패시브는 이미지도 따로 존재....
export const CHAMPION_PASSIVE_IMG =
  'http://ddragon.leagueoflegends.com/cdn/11.16.1/img/passive/';

//https://ddragon.leagueoflegends.com/cdn/img/champion/loading/<champion_name>_<skins.num>.jpg
export const CHAMPION_SKIN_LOADING_IMG =
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';
