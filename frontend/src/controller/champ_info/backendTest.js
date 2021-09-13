import axios from 'axios';
import React from 'react';

//backend와의 api 통신 테스트. 학교 서버에 배포 테스트 이후 제거할 것. --> champRotation에서 한번 호출에서 씀.
const BackendTest = async () => {
  console.log('???');
  const data = await axios
    .get('/api/hello')
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    })
    //성공이던 실패던 항상 실행
    .then(function () {
      // always executed
      console.log('!!');
    });

  return data;
};
export default BackendTest;
