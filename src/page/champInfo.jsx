import React, { useEffect } from 'react';
import Rotation from '../controller/Rotation';

function ChampInfo(props) {
  useEffect(() => {
    Rotation();
  }, []);

  return <div>Hello</div>;
}

export default ChampInfo;
