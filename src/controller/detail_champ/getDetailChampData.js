import axios from 'axios';
import * as config from '../../config';

const getDetailChampData = async (championId) => {
  const {
    data: { data },
  } = await axios
    .get(config.CHAMPION_DATA + championId + '.json')
    .catch((err) => {
      if (400 <= err.response.status && err.response.status < 500) {
        alert('요청하신 챔피언은 존재하지 않습니다. 다시 확인해 주세요!');
        return Promise.reject(false);
      } else if (500 <= err.response.status && err.response.status < 600) {
        console.error(`-----${err.response.status}번 에러 -> server 문제-----`);
      }
    });
  return data[championId];
};

export default getDetailChampData;
