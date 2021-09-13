import React, { useEffect, useState ,useContext} from 'react'
import styled from 'styled-components';
import Masteries from './Masteries';
import {ChamSumContext} from '../../../../page/Search_result';
import RecentLists from './RecentLists';
import{MatchInfoContext} from '../MatchLists';
import {getMasteryAPI} from '../../../../controller/search_result/riotAPI';

const SubContent = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
`

const ChampionMasteries = styled.div`
    display: flex;
` 
const MostChampion = styled.span`
    padding: 0 0 1rem 0;
    font-size: 31px;
`

function SubContents() {

    const [masteries,setMasteries] = useState();

    const {searchInfo,champSummury } = useContext(ChamSumContext)
    const {matchInfo} = useContext(MatchInfoContext);
   

    useEffect(()=>{
        
        getMasteryAPI(searchInfo.id).then(res => {
            let masters = []
            for (let i = 0; i < 3; i++) {
                masters = masters.concat(res.data[i])
            }
            setMasteries(masters)
        })
    },[searchInfo.id])    

      
    
    return (
        <SubContent> 
            {matchInfo && masteries.length >= 3 && <MostChampion> Most Champion</MostChampion>}
                <ChampionMasteries>
                {matchInfo && masteries.length >= 3 &&  
                masteries.map(mastery => 
                    <Masteries 
                        key={mastery.championId}
                        mastery={mastery} 
                        champSummury={champSummury}/> )
                }
                </ChampionMasteries>
        
            {
            matchInfo && <RecentLists />
            }            
           
        </SubContent>
    )
}

export default SubContents
