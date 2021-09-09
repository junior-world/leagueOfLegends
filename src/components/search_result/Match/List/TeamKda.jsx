import React from 'react'
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    color:white;
    &.win {
        background-color:#0066FF;

        padding: 0.5rem;

    }
    &.lose{
        background-color:#FF3333;
 
        padding: 0.5rem;

    }
`
const ObjScore = styled(Row)`
    flex: 0 1 200px;
`

function TeamKda(props) {
    
    const {kda , matchInfo,myPlayInfo,enermy} = props;
    let team;

    if(enermy){
        team  = matchInfo.teams.filter( team => team.teamId !== myPlayInfo.teamId)
    }else{
        team  = matchInfo.teams.filter( team => team.teamId === myPlayInfo.teamId)
    }
    const teamOj = Object.assign({}, team[0]);
    console.log(teamOj)

            /** teamOj 속성들                                      kda 속성들
                    bans: []                                               hap: 54,   
                    baronKills: 0                                          death: 62,
                    dominionVictoryScore: 0                                assist: 90,
                    dragonKills: 0                                         totalGold: 77811
                    firstBaron: false
                    firstBlood: true
                    firstDragon: false
                    firstInhibitor: false
                    firstRiftHerald: false
                    firstTower: false
                    inhibitorKills: 1
                    riftHeraldKills: 0
                    teamId: 200
                    towerKills: 4
                    vilemawKills: 0
                    win: "Win"
            **/

    const match = teamOj.win ? '승리' : '패배'; 

    return (
       
        <Row className = {`${teamOj.win  ? 'win': 'lose'}`}>
            <span style={{color:'white'}}>{match}({teamOj.teamId === 200 ? '레드팀' : '블루팀'})</span> 
            <span>{kda.hap} / {kda.death} / {kda.assist}</span>
            <ObjScore>
                <span><img style={{width:'20px'}} src='/img/object/icon-baron-r.png' alt='바론'/>{teamOj.objectives.baron.kills}</span>
                <span><img style={{width:'20px'}} src='/img/object/icon-dragon-r.png' alt='드래곤'/>{teamOj.objectives.dragon.kills}</span>
                <span><img style={{width:'20px',height:'20px'}} src='/img/object/icon-tower-r.png' alt='타워'/>{teamOj.objectives.tower.kills}</span> 
            </ObjScore>
            <span>{kda.totalGold}</span>    
        </Row>
    )
}

export default TeamKda;
