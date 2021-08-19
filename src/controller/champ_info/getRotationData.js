import GetAllChampData from './getAllChampData';
import { GetRotationAPI } from './getRotationAPI';

/**
 * GetAllChampData() -> 전체 챔피언의 데이터
 * GetRotationAPI() -> 금주의 로테이션 챔피언의 key값
 * 전체 챔피언의 key값과 금주의 로테이션 챔피언의 key값을 이진 탐색 기법을 통하여 로테이션 챔피언의 key값으로
 * 챔피언의 id와 name을 배열로 넣어서 반환
 * id : 챔피언의 상세 정보를 요청할 수 있는 key로 사용 가능. 해당 챔피언의 정보를 제공해주는 페이지에서 Link에 파라미터로 넘겨주어 사용할 예정
 * name : 챔피언 정보 page에서 사용하기 위한 name
 * @returns ratationData -> 배열 객체 -> [{id: allChampionData[key].id, name: allChampionData[key].name}]
 */
const GetRotationData = async () => {
  const rotationAPI = await GetRotationAPI();
  const allChampionData = await GetAllChampData();
  let rotationData = [];

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
  //가나다순 정렬 실행
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
