import React from 'react';
import styled from 'styled-components';
import TeamKda from './TeamKda';
import DetailedGame from './DetailedGame';

const DetailedHeader = styled.div`
    margin-bottom : 1rem;
`


function DetailedContents(props) {

    const {teams,matchInfo,myPlayInfo,maxDamage,teamKda,teamInfos,enermy} = props
    
    return (
        <DetailedHeader>
            <TeamKda kda={teamKda} matchInfo={matchInfo} myPlayInfo={myPlayInfo} enermy={enermy}/>
            {
            teams.map( user => 
            <DetailedGame key={user.participantId}
                user={user}  
                teamInfos={teamInfos}
                myPlayInfo={myPlayInfo} 
                kda={teamKda}
                maxDamage={maxDamage}  
                matchInfo={matchInfo}/>
            )
            }
        </DetailedHeader>
    )
}

export default DetailedContents

