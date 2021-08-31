import axios from 'axios';
import {SUMMONER_URL,ENTRIES_URL,MATCHLISTS_URL,MATCHS_URL,CHAMPION_MASTERIES} from'../../config'

const apiKEY = process.env.REACT_APP_API_KEY; 

const headers = {
    "X-Riot-Token": apiKEY
}

/**
 * 
 * @param {* 검색한 플레이어 명} name 
 * @returns 암호화된 아이디등등 개인 정보 ?
 */
export const getSummonerInfoAPI = async (name) =>{
   const summoner = await axios.get(`${SUMMONER_URL}${name}`,{headers})
    return summoner;
}


/**
 * 
 * @param {*암호화된 아이디} id 
 * @returns 티어 ,승리 ,패배 ,
 */
export const getTierAPI = async (id) =>{
    const data =await axios.get(`${ENTRIES_URL}${id}` , {headers})
    return data;
}


/**
 * 
 * @param {* 암호화된 accountId} accountId 
 * @param {* 가져올 리스트의 수} count 
 * @returns 매치 리스트 
 */
export const getMatchListsAPI = async (accountId,count) =>{
    const data = await axios.get(`${MATCHLISTS_URL}${accountId}?endIndex=${count+5}&beginIndex=${count}`,{headers})    
    return data;
}

/**
 * 
 * @param {* 매치 리스트에 있는 게임아이디} gameId 
 * @returns 해당 게임의 정보
 */
export const getMatchInfoAPI = async (gameId) =>{
    const data =await axios.get(`${MATCHS_URL}${gameId}`,{headers})
    return data;
}


/**
 * 
 * @param {*암호화된 아이디} id 
 * @returns 챔피언 마스터리 정보 
 */
export const getMasteryAPI = async (id) =>{
   const data = await axios.get(`${CHAMPION_MASTERIES}${id}`,{headers})
    return data;
}