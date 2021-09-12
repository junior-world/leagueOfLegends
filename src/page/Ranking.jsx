import NavBar from '../components/main/NavBar';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import RankMenu from '../components/rank/ladder_info/RankMenuList';
import LadderListItem from '../components/rank/ladder_info/LadderListItem';
import RankInfo from '../controller/ranking/getLadder';

const Hcontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 700px;
`;

const Header = styled.div`
    display: flex;
    margin: 1em;
    font-size: 30px;
    margin-left: 3em;
    font-family: TmonMonsori, 'GodoB', '굴림';
`;

const Ranking = () => {
    const [rankData, setRankData] = useState(); //빈 배열도 트루 데이터 안넘어감 랭크 데이터

    useEffect(() => {
        RankInfo().then((res) => {
            setRankData(res);
        });
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <Hcontainer>
                <RankMenu></RankMenu>

                <Header>랭크 정보</Header>

                {rankData && (
                    <LadderListItem rankData={rankData}></LadderListItem>
                )}
            </Hcontainer>
        </div>
    );
};
export default Ranking;
