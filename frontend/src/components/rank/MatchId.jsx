// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import * as config from '../../config';
// import MatchList from './MatchList';

// function Chamslist(props) {
//     const [matchid, setMatchId] = useState();
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         axios
//             .get(
//                 `${config.MATCHLISTS5_URL}${props.puid.puuid}/ids?start=0&count=1&api_key=${process.env.REACT_APP_API_KEY}`,
//             )
//             .then((res) => {
//                 setMatchId(res.data);
//             });
//     }, [props.puid]); //summonerv4d

//     return (
//         <div>
//             {matchid &&
//                 matchid.map((v, i) => {
//                     return <MatchList key={i} mid={v}></MatchList>;
//                 })}
//         </div>
//     );
// }

// export default Chamslist;
