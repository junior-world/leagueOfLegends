import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankIconSearch from '../../../controller/ranking/getIconSearch';
import GetIcon from './GetIcon';

const RankUser = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid #d7dada;
`;

const UlStyle = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: None;
  margin-top: 1rem;
  margin: 0 auto;
  text-align: center;
`;

const LiStyle = styled.li`
  display: flex;

  margin: 0 auto;
  padding: 35px 40px;
  border-width: 5px;
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
    <RankUser>
      <div>
        <UlStyle>
          <LiStyle>
            <div>
              {icons &&
                icons.map((icon, index) => (
                  <GetIcon
                    key={index}
                    rankCU={rankCU[index]}
                    icon={icon}></GetIcon>
                ))}
            </div>
          </LiStyle>
        </UlStyle>
      </div>
      <div></div>
    </RankUser>
  );
}

export default LadderListItem;
