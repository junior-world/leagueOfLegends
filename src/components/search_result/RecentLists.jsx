import React,{useContext,useEffect,useState} from 'react'
import {RiotContext} from './SearchMain';
import axios from 'axios';
import {MATCHS_URL} from '../../config';
import { MatchInfoContext } from './MatchLists';
import {ChamSumContext} from '../../page/Search_result';

const apiKEY = process.env.REACT_APP_API_KEY; 




function RecentLists() {

    const {matchInfo} = useContext(MatchInfoContext)
    const {searchInfo,champSummury} =  useContext(ChamSumContext)

    let participantId ; 
    const gameTime = [];
    let recentArray = [];

    let gameInfo = [];

    matchInfo.forEach( info => {
        gameTime.push(info.gameDuration);

        for(const identity of info.participantIdentities){
            if(searchInfo.accountId === identity.player.accountId ){
                participantId = identity.participantId;
                break;
             }
        }

        const test = info.participants.filter( player => {
            if(player.participantId === participantId){
                return player
            }
        });

        recentArray = recentArray.concat(test)
    });

    //중첩된 것을 찾기위해 분류함
    recentArray.sort(function(a,b){
        if (a.championId > b.championId ) {
            return 1;
            }
            if (a.championId < b.championId) {
            return -1;
            }
            // a must be equal to b
            return 0;
    })

    // 최근 전적 중 중첩된 것 제거
    const result = recentArray.reduce( (acc , cur)=>{
            const len = acc.length;
            if (len === 0 || acc[len - 1].championId !== cur.championId) {
                acc.push(cur);
            }
            return acc;
        },[])

          
    let grouped = groupBy(recentArray, 'championId');
    console.log(grouped)

   let arrList = [];

    result.forEach( res =>{
        let recInfo ={
            kill:0,
            death:0,
            assist :0,
            cs : 0,
            win : false,
            championId : 0,
            count : 0,
        }

        grouped[res.championId].forEach( champ =>{
            recInfo ={
                ...recInfo,
                win : Number(recInfo.win)+Number(champ.stats.win),
                death : recInfo.death + champ.stats.deaths,
                assist : recInfo.assist+champ.stats.assists,
                kill : recInfo.kill + champ.stats.kills,
                championId : champ.championId,
                count : recInfo.count+1,
                cs : recInfo.cs + champ.stats.totalMinionsKilled + champ.stats.neutralMinionsKilled
            }
        })
        arrList.push(recInfo)
        
    })
    console.log(arrList)

    return (
        <div>
            dddd
        </div>
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