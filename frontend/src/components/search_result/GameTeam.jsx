import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Teams = styled.div`
    display: flex;
    padding: 1px;
    align-items: center;
    
`
const Span = styled.span`
    font-weight : 700;
`
const ChampNick = styled(Link)`
    font-size: 14px;
`

function GameTeam({team,totalParticipants,champSummury,myPlayInfo}) {

    let chmapionId;


    totalParticipants.forEach( participant => {
        if(team.participantId === participant.participantId){
            chmapionId = participant.championId ;
        }
    });

    let  chmapionImage ;
    champSummury.forEach( champ => {
        if(champ[1].key === (chmapionId.toString())){
            chmapionImage = champ[1].image.full;
        }
    })
    
    if(myPlayInfo){
        const span =  team.participantId === myPlayInfo.participantId ? <Span>{team.player.summonerName}</Span> : <span>{team.player.summonerName}</span>

        return (
            <>
                <Teams>
                    <img style={{marginLeft:'3px',width:'22px'}}src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${chmapionImage}`} alt='팀1'/><ChampNick to={`/summoners/${team.player.summonerName}`}>{span}</ChampNick> 
                </Teams>
               
            </>
        )
    }else{
        const span = <span>{team.player.summonerName}</span>
        return (
            <>
                <Teams>
                    <img style={{marginLeft:'3px',width:'22px'}}src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${chmapionImage}`} alt='팀1'/><ChampNick to={`/summoners/${team.player.summonerName}`}>{span}</ChampNick> 
                </Teams>
               
            </>
        )
    }
   
}

export default GameTeam
