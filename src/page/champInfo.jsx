<<<<<<< HEAD
import React from 'react';

=======
>>>>>>> f2ad9f37354f9dde2ac7bf666bd713126bc2774b
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
