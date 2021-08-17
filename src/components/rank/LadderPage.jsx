import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RankMenu from './ladder_info/RankMenuList';
import LadderList from './ladder_info/LadderList';

const Hcontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 700px;
    align-items: center;
    margin: 0 auto;
`;

function LadderPage() {
    return (
        <Hcontainer>
            <RankMenu></RankMenu>
            <LadderList></LadderList>
        </Hcontainer>
    );
}

export default LadderPage;
