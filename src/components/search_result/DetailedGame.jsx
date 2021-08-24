import React,{useContext} from 'react'
import GameTeam from './GameTeam';
import {RiotContext} from './SearchMain';
import {ChamSumContext} from '../../page/Search_result'
import styled from 'styled-components';
import ItemImg from './ItemImg';

const Row = styled.div`
    display: flex;

`
const Contents = styled.div`
     display: flex;
     padding:0.5rem;
     justify-content: space-between;
`
const Col = styled.div`
    display: flex;
    flex-direction: column;
`
const Kda = styled(Col)`
    width: 100px;
    font-size: 14px;
    &.kda{
        margin-right:2rem;
    }
`
const ChampSpace = styled(Row)`
    width:150px;
`






function DetailedGame({user, myTeamInfos, myPlayInfo,kda,maxDamage ,  matchInfo}) {

    const {spellSummury,runsSummury} = useContext(RiotContext);
    const {champSummury} = useContext(ChamSumContext);

    const teamInfo = myTeamInfos.find( team =>team.participantId === user.participantId);
    

    const items1 = {
        item0 : user.stats.item0,
        item1 : user.stats.item1,
        item2 : user.stats.item2,
    }
    const items2 = {
        item0 : user.stats.item3,
        item1 : user.stats.item4,
        item2 : user.stats.item5,
    }
  
  // 스펠json에서 내가 사용했던 스펠의 키랑 같은 것을 찾아 
    // 객체가 들어있는 배열로 만든 후 null아닌 것만 필터 
    const mySpell = spellSummury.map( spells  => {
        
        if(spells[1].key === (user.spell1Id).toString() ){
            return { spell1 :spells[1].image.full }
        }
        if(spells[1].key === (user.spell2Id).toString() ){
            return { spell2 :spells[1].image.full }
        }
        return null;
    }).filter(value => value !== null)
   
      // 배열인 것을 객체로 변환 
    const mySpellObj =  Object.assign({}, mySpell[0],mySpell[1]);
    //속성명 spell1 , spell2    


    //룬 깨너자 
    const myRouns = runsSummury.find( run =>( user.stats.perkPrimaryStyle === run.id));
     
    // perk0속성은 첫번쨰 룬
    let perk;
    myRouns.slots.map( slots =>{
        return slots.runes})
        .forEach(slot =>{
          slot.forEach( rune => {
              if(rune.id === user.stats.perk0 ){
                perk = rune;
              }
          })
        })

    const average = ((user.stats.kills + user.stats.assists) /user.stats.deaths).toFixed(2);

    return (
        <Contents>
            {/* team에는 아이디하고 닉네임 정보가 들어가고 total에는 우리팀 유저가 들어감 */}
            <ChampSpace>
                <GameTeam  team={teamInfo} totalParticipants={[user]} champSummury={champSummury} myPlayInfo={myPlayInfo}/>
            </ChampSpace>
            <Row>
                <Col>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${mySpellObj.spell1}`} style={{width:'22px'}} alt='스펠1'/>        
                    <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${mySpellObj.spell2}`} style={{width:'22px'}} alt='스펠2'/>
                </Col>
                <Col>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/img/${perk.icon}`} style={{width:'22px'}} alt='메인2'/>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/img/${myRouns.icon}`} style={{width:'22px'}} alt='메인1'/>
                </Col>
            </Row>
            <Row>   
                <Kda className="kda">
                {average >3 ?  <div style={{color:'#0066FF'}}>{ average }:1</div> :<div style={{color:'#555e5e'}}>{ average }:1</div> }
                    <span>{user.stats.kills}/{user.stats.deaths}/{user.stats.assists} ({( ( (user.stats.kills+user.stats.assists) / kda.hap )*100).toFixed()}%) </span>
                </Kda>
                <Kda>
                    <div>{(user.stats.totalDamageDealtToChampions).toLocaleString()}</div>
                    <div style={{ backgroundColor:'#dddddd'}}>
                        <div style={{backgroundColor:'#FF3333',width:`${(user.stats.totalDamageDealtToChampions/maxDamage*100).toFixed()}%`,height:'15px'}}></div>
                    </div>
                </Kda>
            </Row> 
            <Row>
                <Kda>
                    <span>{user.stats.totalMinionsKilled +user.stats.neutralMinionsKilled} cs</span>
                    <span>분당 {((user.stats.totalMinionsKilled +user.stats.neutralMinionsKilled)/(matchInfo.gameDuration/60).toFixed()).toFixed(1)} </span>
                </Kda>
            </Row>
            <Row>
                <ItemImg width={'30px'}items={items1}/>
                <ItemImg width={'30px'} items={items2}/>
            </Row>

        </Contents>
    )
}

export default DetailedGame;
