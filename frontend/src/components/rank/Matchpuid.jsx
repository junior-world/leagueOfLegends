// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import * as config from '../../config';
// import MatchId from './MatchId';

// function Matchpuid(props) {
//     const [puid, setPuid] = useState();

//     useEffect(() => {
//         const puids = async () => {
//             await axios
//                 .get(
//                     `${config.USER_INFO}${props.puid}?api_key=${process.env.REACT_APP_API_KEY}`,
//                 )
//                 .then((res) => {
//                     setPuid(res.data);
//                 });
//         };
//         puids();
//     }, [props.puid]); //summonerv4

//     return <div>{puid && <MatchId puid={puid}></MatchId>}</div>;
// }

// export default Matchpuid;
