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

    /**
     *  전체 플레이어중 검색한 플레이어의 id정보와 같다면
     *  챔피언 아이디를 꺼내옴
     *  */ 
    totalParticipants.forEach( participant => {
        if(team.participantId === participant.participantId){
            chmapionId = participant.championId ;
        }
    });

    /**
     * 
     * 모든 챔피언 정보 중에서 챔피언 아이디와 같은 것의 
     * 이미지 이름을 가져오기
     */
    let  chmapionImage ;
    champSummury.forEach( champ => {
        if(champ[1].key === (chmapionId.toString())){
            chmapionImage = champ[1].image.full;
        }
    })
    

    /***
     * 
     *  검색한 플레이어의 정보를 넣어서
     *  글자 굵기 처리를 해서 검색한 플레이어의 이름을 잘 보이게 함 
     */
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
