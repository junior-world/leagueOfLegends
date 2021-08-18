// import GetIconAPI from './getProfileIcon';
// import { GetRankingAPI } from './getLadder';

// /**
//  * 챌린저 티어의 정보를 담고있는 객체 중 배열을 추출
//  * 리그 포인트를 이용하여 내림차순 정렬하여 랭킹순서 정렬 후 배열 반환
//  * @returns 챌린저 티어의 정렬된 entries 배열 반환
//  */
// const GetIconSearch = async () => {
//     let rankAPI;
//     const allIcon = await GetIconAPI();
//     let
//     const {
//         data: { data },
//     } = await axios.get(config.PROFILE_ICON).catch((Error) => {
//         console.log(Error);
//     });

//     await GetRankingAPI().then((res) => {
//         rankapi = res;
//     });
//     console.log(GetRankingAPI);
//     // for (const key in rank) {
//     // }
//     return data;

//     // for (const key in allChampionData) {
//     //     if (
//     //         BinarySearch(
//     //             rotationAPI,
//     //             rotationAPI.length,
//     //             Number(allChampionData[key].key),
//     //         ) !== -1
//     //     ) {
//     //         rotationData.push({
//     //             id: allChampionData[key].id,
//     //             name: allChampionData[key].name,
//     //         });
//     //     }
//     // }
//     // //가나다순 정렬 실행
//     // rotationData = rotationData.sort(SortDesc);

//     //     // return rotationData;
//     // };

//     // //이진 탐색 기법
//     // const BinarySearch = (dataArr, size, findData) => {
//     //     let low = 0,
//     //         high = size - 1,
//     //         mid;
//     //     while (low <= high) {
//     //         mid = (low + high) / 2;
//     //         if (dataArr[mid] > findData) high = mid - 1;
//     //         else if (dataArr[mid] < findData) low = mid + 1;
//     //         else return mid;
//     //     }
//     //     return -1;
//     // };
// };

// export default GetIconAPI;
