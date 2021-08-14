import axios from 'axios';
import * as config from '../config';

const Rotation = async () => {
  const {
    data: { freeChampionIds },
  } = await axios.get(
    `${config.ROTATION_CHAMPION}?api_key=${process.env.REACT_APP_API_KEY}`,
  );
};

export default Rotation;
