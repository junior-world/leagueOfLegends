import React from 'react';
import styled from 'styled-components';
import ChampImg from '../champ_info/champImg';
import ChampName from '../champ_info/champName';
import ChampPosition from './champPosition';
import * as config from '../../config';

const HeaderDiv = styled.div`
  display: flex;
  width: 1000px;
  // border: solid 1px #e9eff4;
  margin-top: 80px;
  border-bottom: 1px solid #d5d0d0;
  padding-bottom: 20px;
`;

const ImgDiv = styled.div`
  display: flex;
`;

const NamePositionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 15px;
`;

function DetailChampHeader(props) {
  return (
    <HeaderDiv>
      <ImgDiv>
        <ChampImg
          imagePath={config.CHAMPION_ICON_IMG + props.champId + '.png'}
          detailDesign={'detailChamp'}
        />
      </ImgDiv>
      <NamePositionDiv>
        <ChampName champName={props.champName} detailDesign={'detailChamp'} />
        <ChampPosition champPosition={props.champPosition} />
      </NamePositionDiv>
    </HeaderDiv>
  );
}

export default DetailChampHeader;
