import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RankMenu from './ladder_info/RankMenuList';
import LadderListItem from './ladder_info/LadderListItem';
import RankInfo from '../../controller/ranking/getLadder';

const Hcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 700px;
  align-items: center;
  margin: 0 auto;
`;

function LadderInfo() {
  const [rankData, setRankData] = useState(); //빈 배열도 트루 데이터 안넘어감

  useEffect(() => {
    RankInfo().then((res) => {
      setRankData(res);
    });
  }, []);

  return (
    <Hcontainer>
      <RankMenu></RankMenu>
      {rankData && <LadderListItem rankData={rankData}></LadderListItem>}
    </Hcontainer>
  );
}

export default LadderInfo;
