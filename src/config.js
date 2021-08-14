/*
 * 여러 API URL 및 JSON 경로를 변수로 지정
 * import * as config from '../config'; 로 import 하여 config.변수명 을 통해 사용
 * 컴포넌트 내부 변수와의 차이점(내부 변수는 카멜 케이스)을 두기 위해서 변수명은 snake case 표기법과 대문자로 지을 것
 */

/*
 * 챔피언 분석 page에서 사용하는 변수들 지정
 */
export const ROTATION_CHAMPION = '/lol/platform/v3/champion-rotations'; //챔피언 로테이션 API
export const CHAMPIONS_DATA =
  'https://ddragon.leagueoflegends.com/cdn/11.6.1/data/ko_KR/champion.json'; //모든 챔피언 정보

//http://ddragon.leagueoflegends.com/cdn/11.6.1/data/ko_KR/champion/<champion_name>.json
export const CHAMPION_DATA =
  'http://ddragon.leagueoflegends.com/cdn/11.6.1/data/ko_KR/champion/.json'; //특정 챔피언 정보
