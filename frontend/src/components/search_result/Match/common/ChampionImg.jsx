import React,{useContext} from 'react';
import { ChamSumContext } from '../../../../page/Search_result';
import styled from 'styled-components';

const Img = styled.img`
    width: ${p => p.width};
    margin-left: ${p=> p.marginLeft ? p.marginLeft : ''};

`


function ChampionImg(props) {

    const {champSummury} = useContext(ChamSumContext)
    
    const {championId,width,marginLeft} = props;

  
    // 내 챔피언 이미지 가져오기
    const chmapionImage = getChampionImage(championId,champSummury);

    return (
        <>
           <Img width={width} marginLeft={marginLeft} src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${chmapionImage}`}  alt=''/>
        </>
    )
}

export default ChampionImg



/**
 * 
 * @param {* 유저의 챔피언 아이디} championId 
 * @param {* 전체 챔피언 정보가 있는 데이터} champJson 
 * @returns 챔피언 이미지이름
 */
const getChampionImage = (championId,champJson) =>{
    let  chmapionImage ;
    champJson.forEach( champ => {
        if(champ[1].key === (championId).toString()){
            chmapionImage = champ[1].image.full;
        }
    })
    return chmapionImage;
}