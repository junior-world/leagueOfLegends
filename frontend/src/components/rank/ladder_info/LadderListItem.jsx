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
import Matchpuid from '../Matchpuid';

const RankList = styled.div`
    margin: 0 auto;
    border-bottom: 1px solid #d7dada;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const Top = styled.div`
    display: flex;
`;

const Top2 = styled.div`
    display: flex;
    flex-direction: column;
`;

const UlStyle = styled.ul`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    justify-content: flex-start;
    list-style-type: None;
    margin-top: 1rem;
`;

const LiStyle = styled.li`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 460px;
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
        return i < 20;
    });

    return (
        <RankList>
            <div style={{ margin: '10px 0 20px 0' }}>
                <img
                    src={`/img/ranked-emblems/Emblem_CHALLENGER.png`}
                    alt='티어사진'
                    style={{
                        width: '70px',
                        height: '70px',
                        float: 'left',
                        marginLeft: '30px',
                    }}
                />
            </div>
            <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <UlStyle>
                    {icons &&
                        icons.map((icon, index) => (
                            <LiStyle key={index}>
                                <UserIcon name={icon} i={index + 1}></UserIcon>
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
            {/* <Top2> */}
            {/* <div style={{ margin: '10px 0 20px 0' }}>
                    <img
                        src={`/img/ranked-emblems/Emblem_CHALLENGER.png`}
                        alt='티어사진'
                        style={{
                            width: '70px',
                            height: '70px',
                            float: 'left',
                            marginLeft: '30px',
                        }}
                    />
                </div> */}
            {/* <Top>
                    {icons &&
                        icons.map((v, i) => {
                            return <Matchpuid key={i} puid={v}></Matchpuid>;
                        })}
                </Top> */}
            {/* </Top2> */}
        </RankList>
    );
}

export default LadderListItem;
