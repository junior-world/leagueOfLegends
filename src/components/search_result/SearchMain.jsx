import React,{useState, useEffect,useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {MATCHLISTS_URL,SPELL_DATA, RUNS_DATA} from '../../config.js';
import MatchLists from './MatchLists';
import {ChamSumContext} from '../../page/Search_result';
import SubContents from './SubContents';

const Main = styled.main`
    display: flex;
    
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 810px;
    
`



const apiKEY = process.env.REACT_APP_API_KEY; 



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
        
        async function dddd() {

            const res =await axios({url: `${SPELL_DATA}`,
                method: 'GET',
                contentType: "application/json"})

            setSpellSummury(Object.entries(res.data.data));
             

            const rune =await axios({url: `${RUNS_DATA}`,
            method: 'GET',
            contentType: "application/json"})

            setRunsSummury(rune.data)

        }
      
        dddd()
        

    }, [])


    // 게임 리스트
    useEffect(() => {
        
        async  function matchLists (){ 

            const res = await axios.get(`${MATCHLISTS_URL}${searchInfo.accountId}?endIndex=${count+5}&beginIndex=${count}&api_key=${apiKEY}`)    
            setCount(count+5)
            setMatchLists(res.data.matches)
        
        }

        matchLists();
        
    }, [searchInfo.accountId])
  

    const onClickHandler = (e) =>{
        e.preventDefault();
        if(count > 15){
            return ;
        }else{
            axios.get(`${MATCHLISTS_URL}${searchInfo.accountId}?endIndex=${count+5}&beginIndex=${count}&api_key=${apiKEY}`)
            .then(res => {
                setNewMatchLists(res.data.matches);
            })
        }
        setCount(count+5);
    }

    return (
        <Main>
            <Col>
                {matchLists && 
                    <RiotContext.Provider  value ={{spellSummury,runsSummury}}>
                        <MatchLists  matchLists ={matchLists} searchInfo={searchInfo} onClickHandler={onClickHandler} newMatchLists={newMatchLists}/>
                    </RiotContext.Provider>
                }   
            </Col>
        </Main>
    );
};

export default SearchMain;