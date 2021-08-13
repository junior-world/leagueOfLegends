import axios from 'axios';
import React from 'react';
import * as config from '../config';

const rotation = async () => {
  const {
    data: { freeChampionIds },
  } = await axios.get(
    `${config.ROTATION_CHAMPION}?api_key=${process.env.REACT_APP_RIOT_KEY}`,
  );
};

export default rotation;
