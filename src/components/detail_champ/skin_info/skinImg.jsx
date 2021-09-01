import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 200px;
  height: 400px;
  cursor: pointer;
`;
/**
 * detailDesign -> detailChamp 일 때는 챔피언 상세 정보 page
 * 없을 때는 챔피언 정보 page
 */
function SkinImg(props) {
  return <ImgStyle src={props.imagePath} alt=''></ImgStyle>;
}

export default SkinImg;
