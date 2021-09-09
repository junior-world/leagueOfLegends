import React,{useState, useEffect,useContext} from 'react';
import styled from 'styled-components';
import MatchLists from './Match/MatchLists';
import {ChamSumContext} from '../../page/Search_result';
import {getRunesAPI, getSpellAPI} from '../../controller/search_result/riotJsonAPI';
import {getMatchListsAPI,getMatch5ListAPI} from '../../controller/search_result/riotAPI';
const Main = styled.main`
    display: flex;
    
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 810px;
    
`

export const RiotContext = React.createContext({
    spellSummury: [],
    runsSummury: [],
    matchLists : []
  });

  

const SearchMain = (props) => {
    
    const {searchInfo} = useContext(ChamSumContext)

    const [matchLists, setMatchLists] = useState();
    const [spellSummury, setSpellSummury] = useState([])
    const [runsSummury, setRunsSummury] = useState([])
    const [count, setCount] = useState(0);
    const [newMatchLists, setNewMatchLists] = useState();

    // 스펠,챔피언,룬
    useEffect(() => {
            
        getSpellAPI().then(res => setSpellSummury(Object.entries(res.data.data)) );
        getRunesAPI().then(res => setRunsSummury(res.data));
            
    }, [])


    // 게임 리스트
    useEffect(() => {
        getMatch5ListAPI(searchInfo.puuid, count ).then(res =>{
            setCount(count+5)
            setMatchLists(res.data)
         })
        
    }, [searchInfo.puuid])
  

    const onClickHandler =  async (e) =>{
        e.preventDefault();
        getMatch5ListAPI(searchInfo.puuid, count).then(res =>{
            setNewMatchLists(res.data);
        })
            
        setCount(count+5);
    }

    return (
        <Main>
            <Col>
                {matchLists && 
                    <RiotContext.Provider  value ={{spellSummury,runsSummury}}>
                        <MatchLists  
                            matchLists ={matchLists} 
                            searchInfo={searchInfo} 
                            onClickHandler={onClickHandler} 
                            newMatchLists={newMatchLists}
                            count={count}/>
                    </RiotContext.Provider>
                }   
            </Col>
        </Main>
    );
};

export default SearchMain;