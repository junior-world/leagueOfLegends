import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChampionImg from '../ChampionImg';

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

function GameTeam({team,totalParticipants,myPlayInfo}) {

    let championId;
    /**
     *  전체 플레이어중 검색한 플레이어의 id정보와 같다면
     *  챔피언 아이디를 꺼내옴
     *  */ 
    totalParticipants.forEach( participant => {
        if(team.participantId === participant.participantId){
            championId = participant.championId ;
        }
    });

    
    /***
     * 
     *  검색한 플레이어의 정보를 넣고
     *  글자 굵기 처리를 해서 검색한 플레이어의 이름을 잘 보이게 함 
     */
    if(myPlayInfo){

        const span =  team.participantId === myPlayInfo.participantId ? <Span myPlayInfo>{team.player.summonerName}</Span> : <Span>{team.player.summonerName}</Span>
        return (
            <>
                <Teams>
                    <ChampionImg championId={championId} width='22px' marginLeft="3px"/>
                    <ChampNick to={`/summoners/${team.player.summonerName}`}>{span}</ChampNick> 
                </Teams>
               
            </>
        )

    }else{

        const span = <Span>{team.player.summonerName}</Span>
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
