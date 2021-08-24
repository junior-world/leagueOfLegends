import React, { useEffect, useState ,useContext} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import {CHAMPION_MASTERIES ,MATCHLISTS_URL} from '../../config'
import Masteries from './Masteries';
import {ChamSumContext} from '../../page/Search_result';
import {RiotContext} from './SearchMain';
import MatchLists from './MatchLists';
import RecentLists from './RecentLists';


const SubContent = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
`

const ChampionMasteries = styled.div`
    display: flex;
` 
const RecentMatchInfo = styled.div`
    display: flex;
    border: 1px solid #dddddd;
    border-radius: 10px;
`



const apiKEY = process.env.REACT_APP_API_KEY; 

function SubContents() {

    const [masteries,setMasteries] = useState();

    const {searchInfo,champSummury } = useContext(ChamSumContext)
    
    useEffect(()=>{
        axios.get(`${CHAMPION_MASTERIES}${searchInfo.id}?api_key=${apiKEY}`)
        .then(res => {
            let masters = []
            for (let i = 0; i < 3; i++) {
                masters = masters.concat(res.data[i])
            }

            setMasteries(masters)
        })
    },[searchInfo.id])    

      
    
    return (
        <SubContent>
                <ChampionMasteries>
                        {masteries && masteries.length >= 3 && masteries.map(mastery => 
                            <Masteries key={mastery.championId} mastery={mastery} champSummury={champSummury}/> )
                        }    
                </ChampionMasteries>
                
                <RecentMatchInfo>
                    <RecentLists />
                </RecentMatchInfo>
        </SubContent>
    )
}

export default SubContents
