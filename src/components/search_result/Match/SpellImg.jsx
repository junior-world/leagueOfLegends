import React,{useContext} from 'react';
import { RiotContext } from '../SearchMain';



function SpellImg(props) {

    const {spellSummury} = useContext(RiotContext)

    const {user,width} = props;

    // 스펠json에서 내가 사용했던 스펠의 키랑 같은 것을 찾아 
    // 객체가 들어있는 배열로 만든 후 null아닌 것만 필터 
    const mySpell = spellSummury.map( spells  => {
        
        if(spells[1].key === (user.spell1Id).toString() ){
            return { spell1 :spells[1].image.full }
        }
        if(spells[1].key === (user.spell2Id).toString() ){
            return { spell2 :spells[1].image.full }
        }
        return null;
    }).filter(value => value !== null)
   
      // 배열인 것을 객체로 변환 
    const mySpellObj =  Object.assign({}, mySpell[0],mySpell[1]);
    //속성명 spell1 , spell2    

    return (
        <>
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${mySpellObj.spell1}`} style={{width:width}} alt='스펠1'/> 
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${mySpellObj.spell2}`} style={{width:width}} alt='스펠2'/>
        </>
    )
}

export default SpellImg
