import React from 'react';
import styled from 'styled-components';
import PositionList from './positionList';
import ChampSearch from './champSearch';

const HeaderSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #e9eff4;
`;

function ChampListHeader(props) {
  return (
    <HeaderSection>
      <PositionList />
      <ChampSearch />
    </HeaderSection>
  );
}

export default ChampListHeader;
