import React from 'react';
import styled from 'styled-components';

const ImgDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImgStyle = styled.img`
    width: 82px;
    height: 82px;
    margin-left: 14px;
`;

function MostImg(props) {
    const chInfo = props.name.find(
        (champ) => champ[1].key === props.champid.championId.toString(),
    );

    const chmapionImage = chInfo[1].image.full;

    const championName = chInfo[1].name;

    return (
        <ImgDiv>
            <ImgStyle
                src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${chmapionImage}`}
                alt='숙련된 챔피언'></ImgStyle>
            <div>{championName}</div>
        </ImgDiv>
    );
}

export default MostImg;
