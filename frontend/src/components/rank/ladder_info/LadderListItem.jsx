import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankIconSearch from '../../../controller/ranking/getIconSearch';
import UserIcon from '../UserIcon';
import UserName from '../UserName';
import UserWinLose from '../UserWL';
import UserTier from '../Tier';
import LeaguePoint from '../LeaguePoint';
import ChampList from '../Chamslist';
import TopRank from '../TopRank';

const RankList = styled.div`
    margin: 0 auto;
    border-bottom: 1px solid #d7dada;
    width: 100%;
`;

const UlStyle = styled.ul`
    display: flex;
    flex-direction: column;
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

const Chamlist = styled.div`
    display: felx;
    justify-content: flex-end;
    margin-left: 3rem;
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
        return i < 10;
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
                                        <UserName
                                            rankCU={rankCU[index]}></UserName>
                                        <UserTier
                                            rankCU={rankCU[index]}></UserTier>
                                        <LeaguePoint
                                            rankCU={
                                                rankCU[index]
                                            }></LeaguePoint>
                                        <UserWinLose
                                            rankCU={
                                                rankCU[index]
                                            }></UserWinLose>
                                    </UserNameStyle>
                                </div>

                                <div style={{ margin: '0 auto' }}>
                                    <div
                                        style={{
                                            margin: '0 0 20px 35px',
                                            paddingLeft: '30px',
                                        }}>
                                        Most Champ
                                    </div>
                                    <Chamlist>
                                        <ChampList name={icon}></ChampList>
                                    </Chamlist>
                                </div>
                            </LiStyle>
                        ))}
                </UlStyle>
            </div>
            {/* <div>
                <div>랭킹 많이 한 챔피언</div>
                {icons &&
                    icons.map((v, i) => <TopRank key={i} na={v}></TopRank>)}
            </div> */}
        </RankList>
    );
}

export default LadderListItem;
