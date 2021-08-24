import React,{useState,useContext} from 'react';
import styled from 'styled-components';
import ItemImg from './ItemImg';
import GameTeam from './GameTeam';
import DetailedGame from './DetailedGame';
import {RiotContext} from './SearchMain'
import {ChamSumContext} from '../../page/Search_result';
import TeamKda from './TeamKda';

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
const Each = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 165px;

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
const DetailedHeader = styled.div`
    margin-bottom : 1rem;
`


// 컴포넌트
const MatchInfo = (props) => {

    const {spellSummury,runsSummury} = useContext(RiotContext);
    const {champSummury} = useContext(ChamSumContext);
    const {matchInfo ,searchInfo} = props;
    const [detail, setDetail] = useState(false);


    const queueId = matchInfo.queueId;
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

    //전체 참가자 게임정보
    const totalParticipants = matchInfo.participants;
   
    //모든 참가자들의 id정보,닉네임등등
    const participantIdentities =  matchInfo.participantIdentities;
    
    //게임내에서 내정보
    const myIdt = participantIdentities.filter ( my =>  my.player.accountId === searchInfo.accountId) 

    // 전체 참가자 중에서 내 참가번호랑 같은 것을 필터해서 내 게임 내용들을 가져옴
    const myPlayInfo = totalParticipants.filter(participant => myIdt[0].participantId === participant.participantId)[0]

  
    // 전체 참가자 중 내 팀만 뽑아옴
    const myTeam = totalParticipants.filter( participant => participant.teamId === myPlayInfo.teamId);

    
      // 적팀만 뽑아옴
    const enermyTeam =  totalParticipants.filter( participant => participant.teamId !== myPlayInfo.teamId);
    
    
// 2개의 팀의 데미지의 최대를 뽑기 위해
   let maxDamage=0;
   maxDamage = setMaxdamage(myTeam,enermyTeam);

    // team별 총 kda
    const myTeamKda = setScore(myTeam)
    const enermyTeamKda = setScore(enermyTeam)
    
   
    
    //적팀들의 닉네임과 아이디정보들
    const enermyInfos = getTeamMember(enermyTeam , participantIdentities)
    //내팀들의 닉네임과 아이디정보들
    const myTeamInfos = getTeamMember(myTeam , participantIdentities)


    const items1 = {
        item0 : myPlayInfo.stats.item0,
        item1 : myPlayInfo.stats.item1,
        item2 : myPlayInfo.stats.item2,
    }
    const items2 = {
        item0 : myPlayInfo.stats.item3,
        item1 : myPlayInfo.stats.item4,
        item2 : myPlayInfo.stats.item5,
    }
  
    
    const getChampionImage = (playInfo) =>{
        let  chmapionImage ;
        champSummury.forEach( champ => {
            if(champ[1].key === (playInfo.championId).toString()){
                chmapionImage = champ[1].image.full;
            }
        })
        return chmapionImage;
    }
    
    // 내 챔피언 이미지 가져오기
    const chmapionImage = getChampionImage(myPlayInfo);


    // 스펠json에서 내가 사용했던 스펠의 키랑 같은 것을 찾아 
    // 객체가 들어있는 배열로 만든 후 null인 것은 필터 
    const mySpell = spellSummury.map( spells  => {
        
        if(spells[1].key === (myPlayInfo.spell1Id).toString() ){
            return { spell1 :spells[1].image.full }
        }
        if(spells[1].key === (myPlayInfo.spell2Id).toString() ){
            return { spell2 :spells[1].image.full }
        }
        return null;
    }).filter(value => value !== null)
   

    // 배열인 것을 객체로 변환 
   const mySpellObj =  Object.assign({}, mySpell[0],mySpell[1]);
    //속성명 spell1 , spell2    

    //룬 깨너자 
    const myRouns = runsSummury.find( run =>( myPlayInfo.stats.perkPrimaryStyle === run.id));
     
    // perk0속성은 첫번쨰 룬
    let perk;
    myRouns.slots.map( slots =>{
        return slots.runes})
        .forEach(slot =>{
          slot.forEach( rune => {
              if(rune.id === myPlayInfo.stats.perk0 ){
                perk = rune;
              }
          })
        })


    const clickDetailed = (event) =>{
        event.preventDefault();
            setDetail(!detail);
    }
  
    return (
        <InfoList>
            <List>
                <Bar win={myPlayInfo.stats.win} >

                </Bar>
                <GameInfo>
                    <P>{queueMode}</P>
                    <P className={`${myPlayInfo.stats.win ? 'blue':'red'} `}>{myPlayInfo.stats.win ? '승리':'패배'}</P>
                    <P>08/11</P>
                    <P>{(matchInfo.gameDuration/60).toFixed()}분</P>
                </GameInfo>
                
                <Stats>
                    {/* 세로 */}
                    <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${chmapionImage}`} style={{width:'48px'}} alt='챔피언 사진'/>
                    <P>LV.{myPlayInfo.stats.champLevel}</P>
                </Stats>
                <Row>
                    <Stats className='skill'>
                        {/* 세로 */}
                        <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${mySpellObj.spell1}`} style={{width:'40px'}} alt='스펠1'/>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${mySpellObj.spell2}`} style={{width:'40px'}} alt='스펠2'/>
                    </Stats>
                    <Stats className='skill'>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/${perk.icon}`} style={{width:'40px'}} alt='메인2'/>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/${myRouns.icon}`} style={{width:'40px'}} alt='메인1'/>
                    </Stats>
                </Row>
            
                <Stats className='figure'>
                        {/* 세로 */}
                    <P><span>{myPlayInfo.stats.kills}/{myPlayInfo.stats.deaths}/{myPlayInfo.stats.assists}</span> KDA</P>
                    <P><span>{myPlayInfo.stats.totalMinionsKilled}({(myPlayInfo.stats.totalMinionsKilled/(matchInfo.gameDuration/60).toFixed()).toFixed(1)})</span> CS</P>
                    <P>킬 관여<span>{( ( (myPlayInfo.stats.kills+myPlayInfo.stats.assists) / myTeamKda.hap )*100).toFixed()}%</span></P>
                </Stats>
                <Stats>
                        <ItemImg items={items1}/>
                        <ItemImg items={items2}/>
                </Stats>
                
                <Row>   
                    <Each >
                        { myTeamInfos.map( (team) =>(
                            <GameTeam key={team.participantId} team={team} myPlayInfo={myPlayInfo} totalParticipants={totalParticipants} champSummury={champSummury}/>
                        ))}
                    </Each>
                    <Each >
                        { enermyInfos.map( (team) =>(
                                <GameTeam key={team.participantId} team={team}  myPlayInfo={myPlayInfo} totalParticipants={totalParticipants} champSummury={champSummury} />
                            ))}
                    </Each>
                </Row>


                <Detailed win={myPlayInfo.stats.win} >
                    {detail ? <Button onClick={clickDetailed}>▲</Button> : <Button onClick={clickDetailed}>▼</Button>}
                </Detailed>
            </List>

            {detail && 
            <div>
                <DetailedHeader>
                    <TeamKda kda={myTeamKda} matchInfo={matchInfo} myPlayInfo={myPlayInfo}/>
                    {myTeam.map( user => 
                    <DetailedGame user={user} key={user.participantId} myTeamInfos={myTeamInfos} myPlayInfo={myPlayInfo} 
                    kda={myTeamKda} maxDamage={maxDamage}  matchInfo={matchInfo}
                    />
                    )}
                </DetailedHeader>

                <DetailedHeader>  
                    <TeamKda kda={enermyTeamKda} matchInfo={matchInfo} myPlayInfo={enermyTeam[0]}/>    
                    {enermyTeam.map( user => 
                    <DetailedGame user={user} key={user.participantId}  matchInfo={matchInfo}
                    myTeamInfos={enermyInfos}  kda={enermyTeamKda} maxDamage={maxDamage}/>)}
                </DetailedHeader>

            </div>
            }
        </InfoList>
    );
};

export default MatchInfo;



/**
 * 
 * @param {현재 팀의 정보 my , enermy} teams 
 * @param {* 모든 플레이어들의 아이디정보,닉네임 등등} participantIdentities 
 * @returns 
 */
const getTeamMember = (teams, participantIdentities) =>{
    return (participantIdentities.filter(idt => {
            for(const team of teams){
                if(team.participantId === idt.participantId){
                    return  idt;
                }
            }
            return "";
        })
    )
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
            kda.hap +=  team.stats.kills;
            kda.death += team.stats.deaths;
            kda.assist += team.stats.assists;
            kda.totalGold += team.stats.goldEarned;

        
        });
        return kda;
    }

    const setMaxdamage = (myTeams, enermyTeams) =>{
        let maxDamage = 0 ;

        myTeams.forEach( team => {
            if(maxDamage < team.stats.totalDamageDealtToChampions){
                maxDamage = team.stats.totalDamageDealtToChampions;
            }
        });

        enermyTeams.forEach( team => {
            if(maxDamage < team.stats.totalDamageDealtToChampions){
                maxDamage = team.stats.totalDamageDealtToChampions;
            }
        });
        return maxDamage;
       
    }