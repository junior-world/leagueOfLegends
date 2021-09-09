import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChampionImg from '../common/ChampionImg';

const Teams = styled.div`
    display: flex;
    padding: 1px;
    align-items: center;
    
`
const Span = styled.span`
    font-weight : ${p => p.myPlayInfo ? '700' : ''};
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 138px;
    text-align: left;
`
const ChampNick = styled(Link)`
    font-size: 14px;
`

function GameTeam({team,myPlayInfo}) {

    const championId = team.championId;

    /***
     * 
     *  검색한 플레이어의 정보를 넣고
     *  글자 굵기 처리를 해서 검색한 플레이어의 이름을 잘 보이게 함 
     */
    if(myPlayInfo){

        const span =  team.participantId === myPlayInfo.participantId ? <Span myPlayInfo>{team.summonerName}</Span> : <Span>{team.summonerName}</Span>
        return (
            <>
                <Teams>
                    <ChampionImg championId={championId} width='22px' marginLeft="3px"/>
                    <ChampNick to={`/summoners/${team.summonerName}`}>{span}</ChampNick> 
                </Teams>
               
            </>
        )

    }else{

        const span = <Span>{team.summonerName}</Span>
        return (
            <>
                <Teams>
                    <ChampionImg championId={championId} width='22px' marginLeft="3px"/>
                    <ChampNick to={`/summoners/${team.player.summonerName}`}>{span}</ChampNick> 
                </Teams>
               
            </>
        )
    }
   
}

export default GameTeam
