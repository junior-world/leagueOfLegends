import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as config from '../../config';
import Img from './Img';

const ImgDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

function MostChamp(props) {
    const [champimg, setChampImg] = useState();

    useEffect(() => {
        const data = async () => {
            await axios.get(`${config.CHAMPIONS_DATA}`).then((res) => {
                setChampImg(Object.entries(res.data.data));
            });
        };
        data();
    }, []);

    return (
        <ImgDiv>
            {champimg && <Img name={champimg} champid={props.id}></Img>}
        </ImgDiv>
    );
}

export default MostChamp;
