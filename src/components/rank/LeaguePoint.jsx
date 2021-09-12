import React from 'react';
import styled from 'styled-components';

const LPDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const PointDiv = styled.div`
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #777;
    text-shadow: 1px 1px #2d63a7;
`;

function LP(props) {
    let newStr = props.rankCU.leaguePoints
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
        <LPDiv>
            <PointDiv>{newStr}LP</PointDiv>
        </LPDiv>
    );
}

export default LP;
