import React from 'react';
import styled from 'styled-components';

const NameDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const UserNameDiv = styled.div`
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
    text-shadow: 1px 1px #2d63a7;
`;

function UserName(props) {
    return (
        <NameDiv>
            <UserNameDiv>{props.rankCU.summonerName}</UserNameDiv>
        </NameDiv>
    );
}

export default UserName;
