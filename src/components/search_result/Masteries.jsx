import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    position: absolute;
   
`
const Frame= styled(Img)`
    top: 1px;
    width: 126px;
    height: 122px;
    right: 20px;

`
const Card = styled(Img)`
    width: 200px;
    height: 200px;
    right: -15px;
    top: -12px;
`
const Level =styled(Img)`
        z-index: 2;
        width: 60px;
        right: 52px;
        top: -15px;
        height: 60px;
`

const Banner = styled(Img)`
    top: -20px;
    width: 72px;
    height: 50px;
    right: 46px;

`
const Mastery = styled.div`
    margin-bottom: 1rem;    
    position: relative;
    background-image: url('https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-navigation/global/default/championmask.png');
    background-size: 100% 100%;
    height: 178px;
    width: 167px;
`
function Masteries({mastery,champSummury}) {


    const chInfo = champSummury.find( champ => 
    champ[1].key === (mastery.championId).toString()
    );
    const chmapionImage=chInfo[1].image.full;

    const championName = chInfo[1].name

    return (
        <Mastery>
            <Card src='https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-navigation/global/default/championframe.png' alt='프레임'/>
            <div style={{zIndex:'3', position:'relative'}}>
                <Frame  src='https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-profiles/global/default/mastery_framecomplete.png' alt ='프레임'/>
                <img  alt='챔피언'style={{width:'100px' ,marginTop: '10px', borderRadius:'100px'}}src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${chmapionImage}`}/>
            </div>
            <div style={{position:'relative',height: '37px'}}>
                <Level className='level' src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-profiles/global/default/mastery_level${mastery.championLevel}.png`}/>
                <Banner src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-profiles/global/default/mastery_level${mastery.championLevel}banner.png`}/>
            </div>
            <div style={{color:'white'}}>
                {championName}
            </div>
        </Mastery>
    )
}

export default Masteries
