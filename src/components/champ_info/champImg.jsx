import React from 'react';
import styled from 'styled-components';

const ImgDiv = styled.div`
  display: flex;
  &: hover {
    transform: ${(props) =>
      props.detailDesign === 'detailChamp' ? '' : 'scale(1.4)'};
  }
`;

const ImgStyle = styled.img`
  width: ${(props) =>
    props.detailDesign === 'detailChamp' ? '150px' : '82px'};
  height: ${(props) =>
    props.detailDesign === 'detailChamp' ? '150px' : '82px'};
  margin-left: 8px;
`;
/**
 * detailDesign -> detailChamp 일 때는 챔피언 상세 정보 page
 * 없을 때는 챔피언 정보 page
 */
function ChampImg(props) {
  return (
    <ImgDiv detailDesign={props.detailDesign}>
      <ImgStyle
        src={props.imagePath}
        detailDesign={props.detailDesign}
        alt=''></ImgStyle>
    </ImgDiv>
  );
}

export default ChampImg;
