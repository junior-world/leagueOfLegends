import React from 'react';
import styled from 'styled-components';

const ImgDiv = styled.div`
  display: flex;
  &:hover {
    transform: scale(1.4);
  }
`;

const ImgStyle = styled.img`
  width: 82px;
  height: 82px;
  margin-left: 8px;
`;

function ChampImg(props) {
  return (
    <ImgDiv>
      <ImgStyle src={props.imagePath} alt=''></ImgStyle>
    </ImgDiv>
  );
}

export default ChampImg;
