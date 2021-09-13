import React from 'react';
import styled from 'styled-components';
import TeamKda from './TeamKda';
import DetailedGame from './DetailedGame';

const DetailedHeader = styled.div`
    margin-bottom : 1rem;
`


function DetailedContents(props) {

    const {teams,matchInfo,myPlayInfo,maxDamage,teamKda,enermy} = props
    
    return (
        <DetailedHeader>
            <TeamKda kda={teamKda} matchInfo={matchInfo.info} myPlayInfo={myPlayInfo} enermy={enermy}/>
            {
            teams.map( user => 
            <DetailedGame key={user.participantId}
                user={user}  
                myPlayInfo={myPlayInfo} 
                kda={teamKda}
                maxDamage={maxDamage}  
                matchInfo={matchInfo.info}/>
            )
            }
        </DetailedHeader>
    )
}

export default DetailedContents

