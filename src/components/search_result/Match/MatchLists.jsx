import React,{useEffect,useState, createContext} from 'react';
import styled from 'styled-components';
import MatchInfo from './list/MatchInfo';
import SubContents from './subcontents/SubContents';
import {getMatchInfoAPI} from '../../../controller/search_result/riotAPI';


const Main = styled.div`
    display: flex;
    flex-direction: column;
`
const MainContents = styled.div`
    display: flex;
`

const Button = styled.button`
    border: 1px solid #dddddd;
    margin: 1rem auto;
    padding: 11px;
    background-color: transparent;
    border-radius: 15px;
    cursor: pointer;
   
    &:hover {
        box-shadow: 2px 9px 13px 1px rgb(0 0 0 / 20%);
    }
`

export const MatchInfoContext = createContext(); 

const MatchLists = (props) => {
   
    const {matchLists , searchInfo,onClickHandler, newMatchLists} = props;
    const [matchInfo, setMatchInfo] = useState()
    const [run, setRun] = useState(true)

    useEffect(() => {
        if(newMatchLists){
            getMatchInfo(newMatchLists).then(res => {
                setMatchInfo(matchInfo.concat(res));
                setRun(true);
            });
        }else{
            getMatchInfo(matchLists).then(res => setMatchInfo(res));
        }
    }, [newMatchLists])

    const onClickNewMatchLists = async (e) =>{
        setRun(false)
        await onClickHandler(e);

    }

 
        return (
            <MainContents>

                <Main>
                    { matchInfo && matchInfo.map( matchInfo => (
                        <MatchInfo key={matchInfo.gameId} 
                            matchInfo={matchInfo} 
                            searchInfo={searchInfo} />))    
                    }

                    { 
                    run ?  <Button onClick = {onClickNewMatchLists}>더 보기</Button> : <Button > 로딩,,,</Button>
                    }
                </Main>

                
                <MatchInfoContext.Provider value ={{matchInfo}}>
                     <SubContents /> 
                </MatchInfoContext.Provider>
                
            </MainContents>
        );
    
    
};


export default MatchLists;

 /**
     * 
     * @param {* 매치리스트 배열} matchLists 
     * @returns matchInfo - 게임 내용들이 있는 값들을 불러와 promise로 리턴
     */
  const getMatchInfo =  matchLists => {
    const res = Promise.all( 
        matchLists.map( (matchList) => { 
            return getMatchInfoAPI(matchList.gameId)
            .then(res => {
                return  res.data;
            })
        })
    );
    return res; 
}
