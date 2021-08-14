import GetAllChampData from './getAllChampData';
import { GetRotationAPI } from './getRotationAPI';

const GetRotationData = async () => {
  let rotationAPI;
  const allChampionData = await GetAllChampData();
  let rotationData = [];

  await GetRotationAPI().then((res) => {
    rotationAPI = res;
  });

  //rotationAPI 에 들어있는 key값을 통해 allChampionData의 key값을 찾고, 그 후 찾은 key를 가지고 있는 객체의 id와 name값을 반환.
  for (const key in allChampionData) {
    if (
      BinarySearch(
        rotationAPI,
        rotationAPI.length,
        Number(allChampionData[key].key),
      ) !== -1
    ) {
      rotationData.push({
        id: allChampionData[key].id,
        name: allChampionData[key].name,
      });
    }
  }
  //가나다순 정렬
  rotationData = rotationData.sort(SortDesc);
  return rotationData;
};

//이진 탐색 기법
const BinarySearch = (dataArr, size, findData) => {
  let low = 0,
    high = size - 1,
    mid;
  while (low <= high) {
    mid = (low + high) / 2;
    if (dataArr[mid] > findData) high = mid - 1;
    else if (dataArr[mid] < findData) low = mid + 1;
    else return mid;
  }
  return -1;
};

//가나다순 정렬
function SortDesc(a, b) {
  if (a.name > b.name) return 1;

  if (b.name > a.name) return -1;

  return 0;
}
export default GetRotationData;
