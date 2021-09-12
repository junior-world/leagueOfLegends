import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as config from '../../config';
import Champ from './Champ';
import MostChamp from './MostChamp';

function ChamInfo(props) {
    const [match, setMatchList] = useState();
    const [mastery, setMastery] = useState();

    // useEffect(() => {
    //     const champlist = async () => {
    //         await axios
    //             .get(
    //                 `${config.MATCHLISTS_URL}${props.accountid.accountId}?endIndex=5&api_key=${process.env.REACT_APP_API_KEY}`,
    //             )
    //             .then((res) => {
    //                 setMatchList(res.data.matches);
    //             });
    //     };

    //     champlist();
    // }, [props.accountid.accountId]); //summonerv4

    useEffect(() => {
        const champid = async () => {
            await axios
                .get(
                    `${config.CHAMPION_MASTERIES}${props.accountid.id}?api_key=${process.env.REACT_APP_API_KEY}`,
                )
                .then((res) => {
                    setMastery(res.data);
                });
        };
        champid();
    }, [props.accountid.id]);

    return (
        <div>
            {/* {match &&
                match.map((v, i) => {
                    return <Champ key={i} champ={v}></Champ>;
                })} */}
            {mastery &&
                mastery
                    .filter((v, i) => {
                        return i < 3;
                    })
                    .map((v, i) => {
                        return <MostChamp key={i} id={v}></MostChamp>;
                    })}
        </div>
    );
}

export default ChamInfo;
