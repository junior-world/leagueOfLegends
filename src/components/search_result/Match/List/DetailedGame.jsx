import React,{useContext} from 'react'
import GameTeam from './GameTeam';
import {RiotContext} from '../../SearchMain';
import {ChamSumContext} from '../../../../page/Search_result'
import styled from 'styled-components';
import ItemImg from './ItemImg';
import SpellImg from '../SpellImg';
import Runes from '../Runes';

const Row = styled.div`
    display: flex;

`
const Contents = styled.div`
     display: flex;
     padding:0.5rem;
     justify-content: space-between;
`
const Col = styled.div`
    display: flex;
    flex-direction: column;
`
const Kda = styled(Col)`
    width: 100px;
    font-size: 14px;
    &.kda{
        margin-right:2rem;
    }
`
const ChampSpace = styled(Row)`
    width:150px;
`






function DetailedGame({user, myTeamInfos, myPlayInfo,kda,maxDamage ,  matchInfo}) {

    const {champSummury} = useContext(ChamSumContext);

    const teamInfo = myTeamInfos.find( team =>team.participantId === user.participantId);
    
    const items1 = {
        item0 : user.stats.item0,
        item1 : user.stats.item1,
        item2 : user.stats.item2,
    }
    const items2 = {
        item0 : user.stats.item3,
        item1 : user.stats.item4,
        item2 : user.stats.item5,
    }

    const average = ((user.stats.kills + user.stats.assists) /user.stats.deaths).toFixed(2);

    return (
        <Contents>
            {/* team에는 아이디하고 닉네임 정보가 들어가고 total에는 우리팀 유저가 들어감 */}
            <ChampSpace>
                <GameTeam  team={teamInfo} totalParticipants={[user]} champSummury={champSummury} myPlayInfo={myPlayInfo}/>
            </ChampSpace>
            <Row>
                <Col>
                    <SpellImg user={user} width='22px'/>
                </Col>
                <Col>
                    <Runes user={user} width='22px'/>
                </Col>
            </Row>
            <Row>   
                <Kda className="kda">
                {average >3 ?  <div style={{color:'#0066FF'}}>{ average }:1</div> :<div style={{color:'#555e5e'}}>{ average }:1</div> }
                    <span>{user.stats.kills}/{user.stats.deaths}/{user.stats.assists} ({( ( (user.stats.kills+user.stats.assists) / kda.hap )*100).toFixed()}%) </span>
                </Kda>
                <Kda>
                    <div>{(user.stats.totalDamageDealtToChampions).toLocaleString()}</div>
                    <div style={{ backgroundColor:'#dddddd'}}>
                        <div style={{backgroundColor:'#FF3333',width:`${(user.stats.totalDamageDealtToChampions/maxDamage*100).toFixed()}%`,height:'15px'}}></div>
                    </div>
                </Kda>
            </Row> 
            <Row>
                <Kda>
                    <span>{user.stats.totalMinionsKilled +user.stats.neutralMinionsKilled} cs</span>
                    <span>분당 {((user.stats.totalMinionsKilled +user.stats.neutralMinionsKilled)/(matchInfo.gameDuration/60).toFixed()).toFixed(1)} </span>
                </Kda>
            </Row>
            <Row>
                <ItemImg width={'30px'}items={items1}/>
                <ItemImg width={'30px'} items={items2}/>
            </Row>

        </Contents>
    )
}

export default DetailedGame;
