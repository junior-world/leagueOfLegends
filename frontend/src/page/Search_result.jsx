import React,{useEffect,useState} from 'react'
import {useParams
} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import SearchInfo from '../components/search_result/SearchInfo';
import SearchNav from '../components/search_result/SearchNav';
import SearchMain from '../components/search_result/SearchMain';
import {SUMMONER_URL} from '../config.js';
import SubContents from '../components/search_result/SubContents';
import {CHAMPIONS_DATA} from '../config';

const Row = styled.div`
    display: flex;
    max-width: 1350px;
    margin: 0 auto;

`

const apiKEY = process.env.REACT_APP_API_KEY; 

export const ChamSumContext =  React.createContext({
    champSummury: []
  });



function SearchResult() {
    
//주소창 value 부분 가져오는 것
    const summonerName = useParams();
    
    const [searchInfo, setSearchInfo] = useState()
    const [champSummury, setChampSummury] = useState([])


    useEffect(() => {
        axios.get(`${SUMMONER_URL}${summonerName.summonersName}?api_key=${apiKEY}`)
        .then(res => {   
            setSearchInfo(res.data)
            })
        .catch(res=> console.log(res))
        return () => {
            setSearchInfo()
          };

          
    }, [summonerName.summonersName])

    useEffect(()=>{

        const chmap = async ()=>{
            const res = await axios({url: `${CHAMPIONS_DATA}`, method:'GET', contentType: "application/json"})
            setChampSummury(Object.entries(res.data.data));
        }
        chmap();
    },[])       

    return (
        <div>
            {searchInfo && 
                <>
                        <SearchInfo searchInfo={searchInfo} /> 
                        <hr/>
                        <SearchNav/>
                        <Row>  
                            <ChamSumContext.Provider value ={{champSummury}}>
                                <SearchMain searchInfo={searchInfo}  champSummury={champSummury}/>
                                <SubContents searchInfo={searchInfo} champSummury={champSummury}/>
                            </ChamSumContext.Provider>
                        </Row>
                    
                </>
            }
        </div>
    )
}

export default SearchResult;
