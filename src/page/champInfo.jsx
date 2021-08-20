import React, { useEffect } from 'react';
<<<<<<< Updated upstream
import styled from 'styled-components';
import NavBar from '../components/main/NavBar';
import ChampRotation from '../components/champ_info/rotation_info/champRotation';
import ChampList from '../components/champ_info/position_info/champList';
=======
import Rotation from '../controller/rotation';
>>>>>>> Stashed changes

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
