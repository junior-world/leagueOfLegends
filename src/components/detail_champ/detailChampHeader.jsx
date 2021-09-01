import React, { useState } from 'react';
import styled from 'styled-components';
import ChampImg from '../champ_info/champImg';
import ChampName from '../champ_info/champName';
import ChampPosition from './champPosition';
import * as config from '../../config';

const HeaderDiv = styled.div`
  display: flex;
  position: relative;
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

const ChampStoryButton = styled.button`
  left: 790px;
  top: 120px;
  position: absolute;
  width: 150px;
  background: #1aab8a;
  color: #fff;
  border: none;
  height: 35px;
  cursor: pointer;
`;

const ParentDiv = styled.div`
  position: relative;
`;

const HoverDiv = styled.div`
  width: 800px;
  height: 177px;
  margin-bottom: -200px;
  position: absolute;
  clear: both;
  color: white;
  background-color: rgb(26, 29, 29);
  right: -268px;
  top: -60px;
`;
const StoryHeader = styled.div`
  color: #ffc659;
  margin-bottom: 8px;
  margin-top: 8px;
`;
const StoryHover = styled.div`
  color: #777;
`;

function DetailChampHeader(props) {
  const [viewStory, setViewStory] = useState(false);
  const handleMouseOver = (e) => {
    setViewStory(true);
  };

  const handleMouseLeave = (e) => {
    setViewStory(false);
  };

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

      <ChampStoryButton
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}>
        챔피언 배경
      </ChampStoryButton>

      {viewStory && (
        <HoverDiv>
          <StoryHeader>챔피언 배경</StoryHeader>
          <StoryHover>{props.champLore}</StoryHover>
        </HoverDiv>
      )}
    </HeaderDiv>
  );
}

export default DetailChampHeader;
