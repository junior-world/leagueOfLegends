import React from 'react';
import styled from 'styled-components';

const NameDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ChampNameDiv = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #777;
  text-shadow: 1px 1px #2d63a7;
  padding-left: 8px;
`;

function ChampName(props) {
  return (
    <NameDiv>
      <ChampNameDiv>{props.champName}</ChampNameDiv>
    </NameDiv>
  );
}

export default ChampName;
