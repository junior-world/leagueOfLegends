import React from 'react'
import GameTeam from './GameTeam';
import styled from 'styled-components';

const Each = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 165px;

`


function GameTeamContents(props) {

    // teamInfos는 팀 한명의 개인 아이디 정보
    const {teamInfos,totalParticipants,myPlayInfo} = props;

    return (
        <Each >
        {
         teamInfos.map( (team) =>(
            <GameTeam key={team.participantId} 
            team={team} 
            myPlayInfo={myPlayInfo} 
            totalParticipants={totalParticipants}/>
        ))
        }
        </Each>
    )
}

export default GameTeamContents
