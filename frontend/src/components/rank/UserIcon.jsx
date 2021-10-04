import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as config from '../../config';

const ImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-navigation/global/default/iconframe.png');
    background-size: 100% 100%;
    height: 100px;
    width: 100px;
    overflow: hidden;
`;

const NumDiv = styled.div``;

const ImgStyle = styled.img`
    position: absolute;
    width: 90px;
    height: 90px;
    margin-left: 5px;
    overflow: hidden;
    margin-top: 5px;
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
        <div>
            <NumDiv>{props.i}위</NumDiv>
            <ImgDiv>
                {userIcon && (
                    <ImgStyle
                        src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${userIcon.profileIconId}.png`}
                        alt='프로필사진'></ImgStyle>
                )}
            </ImgDiv>
            {userIcon && <LevelStyle>Lv.{userIcon.summonerLevel}</LevelStyle>}
        </div>
    );
}

export default UserIcon;
