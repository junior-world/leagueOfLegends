import React from 'react'
import styled from 'styled-components';
import opacity from '../../../../image/opacity.png';


const Row = styled.div`
    display: flex;
    align-items: center;
`
const ImgDiv = styled.div`
    width: ${p=>p.width ?  p.width : '32px'};
    height: ${p=>p.width ?  p.width : '32px'};
    background-image: url(${p => p.item !== 0 ? `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${p.item}.png` : opacity});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 1px;
    border-radius: 10px;
`


function ItemImg(props) {
    
    return (
        <Row>
            <ImgDiv width={props.width} item={props.items.item0}></ImgDiv>
            <ImgDiv width={props.width} item={props.items.item1}></ImgDiv>
            <ImgDiv width={props.width} item={props.items.item2}></ImgDiv>
        </Row>
    )
}

export default ItemImg
