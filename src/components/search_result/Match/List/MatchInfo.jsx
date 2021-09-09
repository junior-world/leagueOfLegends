import React,{useState} from 'react';
import styled from 'styled-components';
import ItemImg from './ItemImg';
import SpellImg from '../common/SpellImg';
import Runes from '../common/Runes';
import ChampionImg from '../common/ChampionImg';
import DetailedContents from './DetailedContents';
import GameTeamContents from './GameTeamContents';

const P = styled.p`
    margin:3px;
    font-size: 14px;
    &.blue {
        color: #0066FF;
    }
    &.red {
        color: #FF3333;
    }
`
const InfoList = styled.div`
    margin-bottom: 0.5rem;
    box-shadow: 6px 0px 19px 1px rgb(0 0 0 / 20%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Col = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
`
const GameInfo = styled(Col)`
    width:95px;
`
const Bar = styled.div`
    width:15px;
    background-color: ${p => p.win ? '#0066FF':'#FF3333'};
    border-radius: 10px 0 0 10px;
    
`

const Stats = styled(Col)`
    justify-content: center;
    &.skill{
        padding: 0;
    }
    &.figure{
        width:120px;
    }
`
const Row = styled.div`
    display: flex;
    height: 132px;
    margin-left: 8px;
`

const Detailed = styled.div`
        background-color: ${p => p.win ? '#0066FF':'#FF3333'};
        border-radius: 0 10px 10px 0;
        width: 15px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
` 
const Button = styled.button`
    border:none;
    background-color: transparent;
    padding:0;
    cursor: pointer;
`

const Main = styled.div`
    display: flex;
    border: 1px solid #dddddd;
`
const List = styled(Main)`
    margin-bottom: 0.5rem;
    border-radius: 10px;
`


// 컴포넌트
const MatchInfo = (props) => {

    const {matchInfo ,searchInfo} = props;

    const [detail, setDetail] = useState(false);


    //게임 모든 정보
    const info = matchInfo.info;

    const gameTime = info.gameCreation
    
    // 시간 측정 현재부터 지난 게임에 대한 시간의 흐름 ? ex)몇 일전
    const convertTime = getTime(gameTime); 

    const queueId = info.queueId;
    let queueMode;
    switch(queueId){
        case 420:
            queueMode = '솔로 랭크'
            break;
        case 440:
            queueMode = '자유 랭크'
            break;
        case 450:
            queueMode = '무작위 총력전'
            break;
        default:
            break;
    }

    //전체 참가자 puuid 정보
    const totalParticipants = matchInfo.metadata.participants;
   
     // 전체 참가자 중에서 내 참가번호랑 같은 것을 필터해서 내 게임 내용들을 가져옴
    const myPlayInfo = info.participants.find ( my =>  my.puuid === searchInfo.puuid) 
 
 
    // 전체 참가자 중 내 팀만 뽑아옴
    const myTeam = info.participants.filter( participant => participant.teamId === myPlayInfo.teamId);
    
    // 적팀만 뽑아옴
    const enermyTeam =  info.participants.filter( participant => participant.teamId !== myPlayInfo.teamId);

    // 2개의 팀의 데미지의 최대를 뽑기 위해
    const  maxDamage = setMaxdamage(myTeam,enermyTeam);

    // team별 총 kda
    const myTeamKda = setScore(myTeam)
    const enermyTeamKda = setScore(enermyTeam)
    
    const items1 = {
        item0 : myPlayInfo.item0,
        item1 : myPlayInfo.item1,
        item2 : myPlayInfo.item2,
    }
    const items2 = {
        item0 : myPlayInfo.item3,
        item1 : myPlayInfo.item4,
        item2 : myPlayInfo.item5,
    }

    const clickDetailed = (event) =>{
        event.preventDefault();
            setDetail(!detail);
    }                           
  
    return (
       
        <InfoList>
            <List>
                <Bar win={myPlayInfo.win} >

                </Bar>
                <GameInfo>
                    <P>{queueMode}</P>
                    <P className={`${myPlayInfo.win ? 'blue':'red'} `}>{myPlayInfo.win ? '승리':'패배'}</P>
                    <P>{convertTime}</P>
                    <P>{(info.gameDuration/1000/60).toFixed()}분</P>
                </GameInfo>
                
                <Stats>
                    <ChampionImg championId={myPlayInfo.championId} width='48px'/>
                    <P>LV.{myPlayInfo.champLevel}</P>
                </Stats>

                <Row>
                    <Stats className='skill'>
                       <SpellImg user ={myPlayInfo} width='40px'/>
                    </Stats>
                    <Stats className='skill'>
                        <Runes user={myPlayInfo} width='40px'/>
                    </Stats>
                </Row> 
            
                <Stats className='figure'>
                    <P><span>{myPlayInfo.kills}/{myPlayInfo.deaths}/{myPlayInfo.assists}</span> KDA</P>
                    <P><span>{myPlayInfo.totalMinionsKilled + myPlayInfo.neutralMinionsKilled}({( (myPlayInfo.totalMinionsKilled+myPlayInfo.neutralMinionsKilled) /(info.gameDuration/1000/60).toFixed()).toFixed(1)})</span> CS</P>
                    <P>킬 관여<span>{( ( (myPlayInfo.kills+myPlayInfo.assists) / myTeamKda.hap )*100).toFixed()}%</span></P>
                </Stats>

                <Stats>
                        <ItemImg items={items1}/>
                        <ItemImg items={items2}/>
                </Stats>
                
                <Row>   
                    {/* 아군팀 */}
                   <GameTeamContents teamInfos={myTeam}  myPlayInfo={myPlayInfo}/>
                   {/* 적군팀 */}
                   <GameTeamContents teamInfos={enermyTeam}  myPlayInfo={myPlayInfo}/>
                </Row> 


                <Detailed win={myPlayInfo.win} >
                    {detail ? <Button onClick={clickDetailed}>▲</Button> : <Button onClick={clickDetailed}>▼</Button>}
                </Detailed>
                
            </List>

            
            {detail && 
            <div>
                {/* 아군팀 */}
                <DetailedContents teams={myTeam} matchInfo={matchInfo} myPlayInfo={myPlayInfo} maxDamage={maxDamage} teamKda={myTeamKda}/>
                {/* 적군팀 */}
                <DetailedContents 
                    teams={enermyTeam} 
                    matchInfo={matchInfo} 
                    myPlayInfo={myPlayInfo} 
                    maxDamage={maxDamage} 
                    teamKda ={enermyTeamKda} 
                    enermy = 'true'
                    />
            </div>
            }
        </InfoList>
    );
};

export default MatchInfo;


    /**
     * 
     * @param {* 검색한 플레이어의 팀}} myTeams 
     * @param {* 반대편 팀} enermyTeams 
     * @returns 해당 게임의 가장 큰 데미지
     */
    const setMaxdamage = (myTeams, enermyTeams) =>{
        let maxDamage = 0 ;

        myTeams.forEach( team => {
            if(maxDamage < team.totalDamageDealtToChampions){
                maxDamage = team.totalDamageDealtToChampions;
            }
        });

        enermyTeams.forEach( team => {
            if(maxDamage < team.totalDamageDealtToChampions){
                maxDamage = team.totalDamageDealtToChampions;
            }
        });
        return maxDamage;
       
    }

    
/**
    * 
    * @param {*현재 팀의 정보 my , enermy} teams 
    * @returns {팀별 전체 kda} kda
    */
 const setScore = (teams)=>{

    const kda = { 
        hap : 0,
        death : 0,
        assist : 0,
        totalGold : 0,

    }

    teams.forEach( team => {
        kda.hap +=  team.kills;
        kda.death += team.deaths;
        kda.assist += team.assists;
        kda.totalGold += team.goldEarned;

    
    });
    return kda;
}


/**
 * 
 * @param {*게임 시작 날짜}} gameTime 
 * @returns (현재 날짜 - 지난 게임의 날짜) 시간의 흐름  //몇일전
 */
const getTime = (gameTime) =>{

    const currentTime = Date.now();

    const diff = currentTime - gameTime;

    let time = Math.floor(((diff/1000)/60)/60);
    let timeConvert = `${time}시간 전`;
    
    if(time > 23){
        time = Math.floor(time/24)
        timeConvert = `${time}일 전 `
    }

    return timeConvert;
}