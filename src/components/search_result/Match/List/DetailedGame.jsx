import React,{useContext} from 'react'
import GameTeam from './GameTeam';
import {ChamSumContext} from '../../../../page/Search_result'
import styled from 'styled-components';
import ItemImg from './ItemImg';
import SpellImg from '../common/SpellImg';
import Runes from '../common/Runes';

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



function DetailedGame({user, myPlayInfo,kda,maxDamage , matchInfo}) {

    
    const items1 = {
        item0 : user.item0,
        item1 : user.item1,
        item2 : user.item2,
    }
    const items2 = {
        item0 : user.item3,
        item1 : user.item4,
        item2 : user.item5,
    }

    const average = ((user.kills + user.assists) /user.deaths).toFixed(2);

    return (
        <Contents>
            {/* team에는 아이디하고 닉네임 정보가 들어가고 total에는 우리팀 유저가 들어감 */}
            <ChampSpace>
                <GameTeam  team={user}  myPlayInfo={myPlayInfo}/>
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
                    <span>{user.kills}/{user.deaths}/{user.assists} ({( ( (user.kills+user.assists) / kda.hap )*100).toFixed()}%) </span>
                </Kda>
                <Kda>
                    <div>{(user.totalDamageDealtToChampions).toLocaleString()}</div>
                    <div style={{ backgroundColor:'#dddddd'}}>
                        <div style={{backgroundColor:'#FF3333',width:`${(user.totalDamageDealtToChampions/maxDamage*100).toFixed()}%`,height:'15px'}}></div>
                    </div>
                </Kda>
            </Row> 
            <Row>
                <Kda>
                    <span>{user.totalMinionsKilled +user.neutralMinionsKilled} cs</span>
                    <span>분당 {((user.totalMinionsKilled +user.neutralMinionsKilled)/(matchInfo.gameDuration/1000/60).toFixed()).toFixed(1)} </span>
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
