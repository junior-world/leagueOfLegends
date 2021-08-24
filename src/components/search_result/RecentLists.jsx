import React,{useContext,useEffect,useState} from 'react'
import {RiotContext} from './SearchMain';
import axios from 'axios';
import {MATCHS_URL} from '../../config';
import { MatchInfoContext } from './MatchLists';

const apiKEY = process.env.REACT_APP_API_KEY; 




function RecentLists() {

    const {matchInfo} = useContext(MatchInfoContext)

    console.log(matchInfo)

    return (
        <div>
            dddd
        </div>
    )
}

export default RecentLists
