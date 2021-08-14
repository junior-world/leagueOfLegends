import axios from 'axios';
import * as config from '../../config';

const GetAllChampData = async () => {
  const {
    data: { data },
  } = await axios.get(config.ALL_CHAMPION_DATA).catch((err) => {
    if (400 <= err.response.status && err.response.status < 500) {
      console.error(`-----${err.response.status}번 에러 -> request 문제-----`);
    } else if (500 <= err.response.status && err.response.status < 600) {
      console.error(`-----${err.response.status}번 에러 -> server 문제-----`);
    }
  });

  return data;
};

export default GetAllChampData;
