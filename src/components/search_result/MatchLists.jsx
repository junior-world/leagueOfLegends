import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {MATCHS_URL} from '../../config';
import MatchInfo from './MatchInfo';

const apiKEY = process.env.REACT_APP_API_KEY; 

const Main = styled.div`
    display: flex;
    border: 1px solid #dddddd;
`
const List = styled(Main)`
    margin-bottom: 0.5rem;
    box-shadow: 6px 0px 19px 1px rgb(0 0 0 / 20%);
    border-radius: 10px;
`



const MatchLists = (props) => {
    
   
    const {matchList , searchInfo} = props;

    const [matchInfo, setMatchInfo] = useState()

   
    useEffect(() => {
        axios.get(`${MATCHS_URL}/${matchList.gameId}?api_key=${apiKEY}`)
        .then(res => {
            setMatchInfo(res.data)
            
        })
        
    }, [matchList.gameId])



    
    return (
        <>
            { matchInfo &&
                <List>
                    <MatchInfo  matchInfo={matchInfo} searchInfo={searchInfo} /> 
                </List>
            }
        </>
    );
};

export default React.memo(MatchLists);