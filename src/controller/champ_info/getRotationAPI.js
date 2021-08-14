import axios from 'axios';
import * as config from '../../config';

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
