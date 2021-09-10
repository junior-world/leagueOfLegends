import React,{useContext} from 'react'
import {ChamSumContext} from '../../../../page/Search_result';
import styled from 'styled-components';


const ChampionAllInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    width:100px;

    font-size: 18px;
`

const RecentsChampion = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem 0;
    border-bottom: 1px solid #dddddd;

`  
const Img = styled.img`
    width: 63px;
    border-radius: 63px;

`
function RecentMatch(props) {

    const {champSummury} =  useContext(ChamSumContext)

    const {match} = props;
    
    // 내 챔피언 이미지,이름 가져오기
    const chmapion = getChampionImage(match,champSummury);

    const winRate = ((match.win/match.count)*100).toFixed();
    const kills = (match.kill/match.count).toFixed(1)
    const deaths = (match.death/match.count).toFixed(1)
    const assists = (match.assist/match.count).toFixed(1)
    const cs = (match.cs/match.count).toFixed(1)
    const average = ( ( (match.kill + match.assist) / match.death ) ).toFixed(2) === 'Infinity' ? 'perfect' : ( ( (match.kill + match.assist) / match.death )).toFixed(2)
  
    
    return (
        <RecentsChampion>
        
            <Img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${chmapion.image}`} alt='챔피언 사진'/>

            <ChampionAllInfo>
                <span>{chmapion.name}</span>
                <span>cs {cs}</span>
            </ChampionAllInfo>

            <ChampionAllInfo>
                <span>{average} 평점</span>
                <span>{kills}/{deaths}/{assists}</span>
            </ChampionAllInfo>

            <ChampionAllInfo>
                <span>{winRate}%</span>
                <span>{match.count}게임</span>
            </ChampionAllInfo>
            
        </RecentsChampion>          
    )
}

export default RecentMatch



/**
 * 
 * @param {*플레이 정보} playInfo 
 * @param {*모든 챔피언 정보} champSummury 
 * @returns 플레이 정보에 맞는 img이름
 */
const getChampionImage = (playInfo ,champSummury) =>{
    let chmapion = {
        
    };
    champSummury.forEach( champ => {
        if(champ[1].key === (playInfo.championId).toString()){
            chmapion.image = champ[1].image.full;
            chmapion.name = champ[1].name;
        }
    })
    return chmapion;
}