import React,{useContext} from 'react'
import { MatchInfoContext } from '../List/MatchLists';
import {ChamSumContext} from '../../../../page/Search_result';
import RecentMatch from './RecentMatch';
import styled from 'styled-components';
import GameChart from './GameChart';

const RecentsMatch = styled.span`
    font-size: 32px;
    margin-bottom: 1rem;
`
const RecentMatchInfo = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #dddddd;
    border-radius: 10px;
   
`

function RecentLists() {

    const {matchInfo} = useContext(MatchInfoContext)
    const {searchInfo} =  useContext(ChamSumContext)

    let participantId ; 
    let recentArray = [];

    const recentsObj = {
        kill:0,
        death:0,
        assist :0,
        cs : 0,
        win : false,
        championId : 0,
        creationTime: 0 ,
        gameDuration : 0
    };

    matchInfo.forEach( info => {
        let newObj= {}
        

        for(const identity of info.participantIdentities){
            if(searchInfo.accountId === identity.player.accountId ){
                participantId = identity.participantId;
                break;
             }
        }

        for(const player of info.participants){
            if(player.participantId === participantId){
                
                 newObj ={
                    ...recentsObj,
                    win : player.stats.win,
                    death : player.stats.deaths,
                    assist : player.stats.assists,
                    kill :  player.stats.kills,
                    championId : player.championId,
                    count : recentsObj.count+1,
                    cs : player.stats.totalMinionsKilled + player.stats.neutralMinionsKilled,
                    creationTime :info.gameCreation,
                    gameDuration : info.gameDuration,
                }
                break;
            }
        }

        recentArray = recentArray.concat(newObj)
    });


    // 최근 시간으로 분류함
    recentArray.sort(function(a,b){
        if (a.creationTime > b.creationTime ) {
            return -1;
            }
            if (a.creationTime < b.creationTime) {
            return 1;
            }
            // a must be equal to b
            return 0;
    })

    // 최근 전적 중 중첩된 것 제거
    const result = recentArray.reduce( (acc , cur)=>{
            const len = acc.length;
            let count = 0;
            let check ='';
         
            if(len === 0){
                acc.push(cur)
            }else{
                for(const i of acc){
                    count++

                    if( i.championId === cur.championId){
                        check+='1'
                    }else{
                        check+='0'
                    }

                    if((count === len) && check.indexOf('1')===-1){
                       acc.push(cur)
                    }
                }
            }
            
            return acc;
        },[])
          
    let grouped = groupBy(recentArray, 'championId');

    let arrList = [];
    /**
     *  챔피언아이디의 중첩이 제거된 배열을 돌려 배열에
     *    챔피언 아이디를 통해 grouped의 객체에 접근
     *   각 챔피언 아이디에 맞는 게임 내용들을 종합
     */ 
    result.forEach( res =>{
        let recInfo ={
            kill:0,
            death:0,
            assist :0,
            cs : 0,
            win : false,
            championId : 0,
            count : 0,
            gameDuration : 0,
        }

        grouped[res.championId].forEach( champ =>{
            recInfo ={
                ...recInfo,
                win : Number(recInfo.win)+Number(champ.win),
                death : recInfo.death + champ.death,
                assist : recInfo.assist+champ.assist,
                kill : recInfo.kill + champ.kill,
                championId : champ.championId,
                count : recInfo.count+1,
                cs : recInfo.cs + champ.cs,
                gameDuration : recInfo.gameDuration + champ.gameDuration
            }
        })
        arrList.push(recInfo)
        
    })

   
    return (
        <>
            <RecentsMatch>최근 전적</RecentsMatch>
            
            <GameChart arrList={arrList} />
            
            <RecentMatchInfo>
                { 
                arrList.map( match => 
                    (<RecentMatch  key= {match.championId} match = {match} />) )
                }
            </RecentMatchInfo>
        </>
    )
}

export default RecentLists




/**
 * 
 * @param {*} objectArray 배열안에 객체가 들어있는 배열
 * @param {*} property 배열 안에 객체의 속성 
 * @returns 챔피언 아이디의 속성으로 객체를 만들어 그룹 처리해
 *          해당 챔피언의 판수를 판별함
 */
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property];
        if (!acc[key]) {
        acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

