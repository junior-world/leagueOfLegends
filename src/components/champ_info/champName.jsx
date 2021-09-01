import React from 'react';
import styled from 'styled-components';

const NameDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ChampNameDiv = styled.div`
  font-size: ${(props) =>
    props.detailDesign === 'detailChamp' ? '50px' : '13px'};
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  text-shadow: 1px 1px #2d63a7;
  padding-left: 8px;
`;

function ChampName(props) {
  return (
    <NameDiv>
      <ChampNameDiv detailDesign={props.detailDesign}>
        {props.champName}
      </ChampNameDiv>
    </NameDiv>
  );
}

export default ChampName;
