import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/main/NavBar';
import ChampRotation from '../components/champ_info/rotation_info/champRotation';
import ChampList from '../components/champ_info/position_info/champList';

const MainContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ChampInfo(props) {
  return (
    <div>
      <NavBar />
      <MainContents>
        <ChampRotation />
        <ChampList />
      </MainContents>
    </div>
  );
}

export default ChampInfo;
