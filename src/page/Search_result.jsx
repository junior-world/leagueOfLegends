import React,{useEffect,useState} from 'react'
import {useHistory, useParams
} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import SearchInfo from '../components/search_result/SearchInfo';
import SearchNav from '../components/search_result/SearchNav';
import SearchMain from '../components/search_result/SearchMain';
import {SUMMONER_URL , MATCHLISTS_URL ,ALL_CHAMPION_DATA} from '../config.js';
import SubContents from '../components/search_result/SubContents';

const Row = styled.div`
    display: flex;
    max-width: 1350px;
    margin: 0 auto;

`

const apiKEY = process.env.REACT_APP_API_KEY; 

export const ChamSumContext =  React.createContext({
    searchInfo: [],
    champSummury: [] ,
});




function SearchResult() {
    
//주소창 value 부분 가져오는 것
    const summonerName = useParams();
    const [searchInfo, setSearchInfo] = useState()
    const [champSummury, setChampSummury] = useState([])
    const [error, setError] = useState(false);

    const headers = {
    "X-Riot-Token": apiKEY
    }

    useEffect(() => {
        axios.get(`${SUMMONER_URL}${summonerName.summonersName}`,{headers})
        .then(res => {   
            setSearchInfo(res.data)
            })
        .catch(res=> setError(true) )
        return () => {

            setSearchInfo()
          };

          
    }, [summonerName.summonersName])


    useEffect(()=>{

        const chmap = async ()=>{
            const res = await axios({url: `${ALL_CHAMPION_DATA}`, method:'GET', contentType: "application/json"})
            setChampSummury(Object.entries(res.data.data));
        }
        chmap();
    },[])       


    
    return (
        <div>
            { searchInfo && 
                <>
                        <SearchInfo searchInfo={searchInfo} /> 
                        <hr/>
                        <SearchNav/>
                        <Row>  
                            <ChamSumContext.Provider value ={{champSummury, searchInfo} }>
                                <SearchMain  />
                            </ChamSumContext.Provider>
                        </Row>
                    
                </>
            }
            {
                error && 
                <div>
                    소환사가 존재하지 않습니다.
                </div>
            }
     
        </div>
    )
}

export default SearchResult;
