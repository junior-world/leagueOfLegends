import React,{useContext} from 'react';
import { RiotContext } from '../SearchMain';

function Runes(props) {

    const {runsSummury} = useContext(RiotContext)
    const {user,width} = props;

     //룬 깨너자 
     const myRouns = runsSummury.find( run =>( user.stats.perkPrimaryStyle === run.id));
     
     // perk0속성은 첫번쨰 룬
     let perk;
     myRouns.slots.map( slots =>{
         return slots.runes})
         .forEach(slot =>{
           slot.forEach( rune => {
               if(rune.id === user.stats.perk0 ){
                 perk = rune;
               }
           })
         })

    return (
        <>
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/${perk.icon}`} style={{width:width}} alt='메인2'/>
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/${myRouns.icon}`} style={{width:width}} alt='메인1'/>
        </>
    )
}

export default Runes
