import React, { useEffect } from 'react';
import * as config from '../config';
import rotation from '../controller/rotation';

function champInfo(props) {
  useEffect(() => {
    rotation();
  }, []);

  return <div>Hello</div>;
}

export default champInfo;
