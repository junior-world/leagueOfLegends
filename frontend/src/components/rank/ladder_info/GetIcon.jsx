import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as config from '../../../config';

const RankUser = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid #d7dada;
  border: 2px solid #bdbbbb;
  width: 650px;
  margin: 0 auto;
  padding: 35px 40px;
  border-width: 5px;
  text-align: left;
  display: flex;
`;

function GetIcon(props) {
  const [test, settest] = useState();
  const [test2, settest2] = useState();
  const [isRankLoading, setIsRankLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${config.USER_INFO}${props.icon}?api_key=${process.env.REACT_APP_API_KEY}`,
      )
      .then((res) => {
        settest(res.data);
      });
  }, [props.icon]); //summoner

  useEffect(() => {
    settest2(props.rankObject); //5명 객체
    setIsRankLoading(true);
  }, [props.rankObject]); //rankdata

  return (
    <RankUser>
      {/* <div>1</div> */}
      <div>{props.rankCU.wins}</div>
      <div>{props.rankCU.tier}</div>

      <div>
        {test && (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${test.profileIconId}.png`}
            alt='프로필사진'
            style={{ borderRadius: '10px', width: '100px' }}
          />
        )}
        {test && <div>{test.summonerLevel}</div>}
      </div>

      <img
        src={`/img/ranked-emblems/Emblem_${props.rankCU.tier}.png`}
        alt='티어사진'
      />

      <div>{test && <div>{test.name} </div>}</div>
    </RankUser>
  );
}

export default GetIcon;
