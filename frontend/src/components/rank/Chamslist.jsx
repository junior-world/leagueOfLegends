import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as config from '../../config';
import ChampInfo from './ChampInfo';

function Chamslist(props) {
    const [champ, setChamp] = useState();

    useEffect(() => {
        axios
            .get(
                `${config.USER_INFO}${props.name}?api_key=${process.env.REACT_APP_API_KEY}`,
            )
            .then((res) => {
                setChamp(res.data);
            });
    }, [props.name]); //summonerv4

    return (
        <div>
            <div>{champ && <ChampInfo accountid={champ}></ChampInfo>}</div>
        </div>
    );
}

export default Chamslist;
