import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankIconSearch from '../../../controller/ranking/getIconSearch';
import UserIcon from '../UserIcon';
import UserName from '../UserName';
import UserWinLose from '../UserWL';
import UserTier from '../Tier';

const RankList = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid #d7dada;
  width: 100%;
`;

const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: None;
  margin-top: 1rem;
`;

const LiStyle = styled.li`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 500px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 10%);
  padding: 35px 40px;

  border-bottom: 10px;
`;

const UserNameStyle = styled.div`
  width: 200px;
  margin-bottom: 1em;
`;

function LadderListItem(props) {
  const [icons, setIcon] = useState();

  useEffect(() => {
    RankIconSearch().then((res) => {
      setIcon(res);
    });
  }, []);

  const rankCU = props.rankData.filter((c, i) => {
    return i < 5;
  });

  return (
    <RankList>
      <div>
        <UlStyle>
          {icons &&
            icons.map((icon, index) => (
              <LiStyle key={index}>
                <UserIcon name={icon}></UserIcon>
                <div>
                  <UserNameStyle>
                    <UserName rankCU={rankCU[index]}></UserName>
                    <UserTier rankCU={rankCU[index]}></UserTier>
                  </UserNameStyle>
                </div>
                {/* <UserWinLose rankCU={rankCU[index]}></UserWinLose> */}
              </LiStyle>
            ))}
        </UlStyle>
      </div>
      <div></div>
    </RankList>
  );
}

export default LadderListItem;
