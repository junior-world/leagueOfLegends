// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import * as config from '../../config';
// import TopChamp from './TopChamp';
// import Most from './MostChamp';

// function Chamslist(props) {
//     const [matchlist, setMatchList] = useState();
//     const [champimg, setChampImg] = useState();
//     const set = [];
//     useEffect(() => {
//         const data = async () => {
//             await axios.get(`${config.CHAMPIONS_DATA}`).then((res) => {
//                 setChampImg(Object.entries(res.data.data));
//             });
//         };
//         data();
//     }, []);

//     useEffect(() => {
//         axios
//             .get(
//                 `${config.MATCHS5_URL}${props.mid}?api_key=${process.env.REACT_APP_API_KEY}`,
//             )
//             .then((res) => {
//                 const id = res.data.info.participants;
//                 const arr = [];
//                 id.map((v, i) => {
//                     return arr.push(v.championId);
//                 });
//                 console.log(arr);
//                 const set = new Set(id);
//                 const uniqueset = [...set];
//                 setMatchList(uniqueset);
//             });
//     }, [props.mid]); //summonerv4

//     console.log(matchlist);
//     return (
//         <div>
//             {matchlist &&
//                 matchlist
//                     // .filter((v, i) => {
//                     //     return matchlist[i].indexof(v) === i;
//                     // })
//                     .map((v, i) => {
//                         // chid.push(v[1].championId);

//                         return (
//                             <TopChamp
//                                 key={i}
//                                 name={champimg}
//                                 top={v.championName}></TopChamp>
//                         );
//                     })}
//             {/* {matchlist && <TopChamp top={matchlist}></TopChamp>} */}
//         </div>
//     );
// }

// export default Chamslist;
