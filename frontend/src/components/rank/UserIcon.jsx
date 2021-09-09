import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as config from '../../config';

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgStyle = styled.img`
  width: 82px;
  height: 82px;
  margin-left: 14px;
`;

const LevelStyle = styled.div`
  text-align: left;
  margin-left: 2em;
`;
function UserIcon(props) {
  const [userIcon, setUserIcon] = useState();

  useEffect(() => {
    axios
      .get(
        `${config.USER_INFO}${props.name}?api_key=${process.env.REACT_APP_API_KEY}`,
      )
      .then((res) => {
        setUserIcon(res.data);
      });
  }, [props.name]); //summonerv4

  return (
    <ImgDiv>
      {userIcon && (
        <ImgStyle
          src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${userIcon.profileIconId}.png`}
          alt='프로필사진'></ImgStyle>
      )}
      {userIcon && <LevelStyle>Lv.{userIcon.summonerLevel}</LevelStyle>}
    </ImgDiv>
  );
}

export default UserIcon;
