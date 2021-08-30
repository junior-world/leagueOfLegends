import React from 'react'
import styled from 'styled-components'
import RankTier from './RankTier'

const DivRow = styled.div`
    margin-left: auto;
    display: flex;
`

function SummonersTier(props) {

    const {summonnerTier} = props;

    const solo = {
        type:'솔로랭크',
        tier : 'Unranked',
        rank : '',
        win : 0,
        lose : 0,
        point : 0
    }
    const team = {
        type:'자유랭크',
        tier : 'Unranked',
        rank : '',
        win : 0,
        lose : 0,
        point : 0
    }


    summonnerTier.forEach( tier => {
        if(tier.queueType === "RANKED_FLEX_SR"){
      
            team.rank = tier.rank;
            team.tier= tier.tier[0]+tier.tier.slice(1).toLowerCase();
            team.win = tier.wins;
            team.lose = tier.losses;
            team.point = tier.leaguePoints;

        }else{
            solo.rank = tier.rank;
            solo.tier = tier.tier[0]+tier.tier.slice(1).toLowerCase();
            solo.win = tier.wins;
            solo.lose = tier.losses;
            solo.point = tier.leaguePoints;
        }
    });

    const color = {
        'Unranked':'dimgrey',
        'Bronze':'#774937', 
        'Silver':'#757575', 
        'Gold':'#ed9c28', 
        'Platinum':'#7ead97',
        'Diamond':'#9ac5db',
        'Master':'#f08ce1',
        'Grandmaster':'#FF7F7F',
        'Challenger':'#2c97fa'
    };
  

    return (
        <DivRow>
            <RankTier rankMode = {solo} color = {color}/>
            <RankTier rankMode ={team} color = {color}/>
        </DivRow>
       
    )
}

export default SummonersTier;
