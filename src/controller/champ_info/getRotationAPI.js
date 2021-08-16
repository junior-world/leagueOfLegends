import axios from 'axios';
import * as config from '../../config';

/**
 * riot Rotation API 요청
 * 요청한 API의 data중 freeChampionIds(금주의 로테이션 챔피언 데이터)만을 가져와 반환
 * @returns  freeChampionIds -> 금주의 로테이션 챔피언의 key값
 */
export const GetRotationAPI = async () => {
  const {
    data: { freeChampionIds },
  } = await axios
    .get(`${config.ROTATION_CHAMPION}?api_key=${process.env.REACT_APP_API_KEY}`)
    .catch((err) => {
      if (400 <= err.response.status && err.response.status < 500) {
        console.error(
          `-----${err.response.status}번 에러 -> request 문제-----`,
        );
      } else if (500 <= err.response.status && err.response.status < 600) {
        console.error(`-----${err.response.status}번 에러 -> server 문제-----`);
      }
    });
  return freeChampionIds;
};
