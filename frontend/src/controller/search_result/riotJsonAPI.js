import axios from "axios";
import {ALL_CHAMPION_DATA,RUNS_DATA,SPELL_DATA } from '../../config';


export  const getChampionAPI = async ()=>{
    const champion = await axios({url: `${ALL_CHAMPION_DATA}`, method:'GET', contentType: "application/json"})
    return champion;
}


export const getRunesAPI = async () =>{
    const runes =await axios({url: `${RUNS_DATA}`,
    method: 'GET',
    contentType: "application/json"});

    return runes;
}


export const getSpellAPI = async () =>{

    const spell =await axios({url: `${SPELL_DATA}`,
    method: 'GET',
    contentType: "application/json"})

    return spell;
}

