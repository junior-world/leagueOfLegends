import axios from 'axios';
import * as config from '../../config';

const getDetailChampData = async (championId) => {
  const {
    data: { data },
  } = await axios
    .get(config.CHAMPION_DATA + championId + '.json')
    .catch((err) => {
      if (400 <= err.response.status && err.response.status < 500) {
        alert('요청하신 챔피언은 존재하지 않습니다. 다시 확인해 주세요!');
        return Promise.reject(false);
      } else if (500 <= err.response.status && err.response.status < 600) {
        console.error(`-----${err.response.status}번 에러 -> server 문제-----`);
      }
    });

  /**
   * 기본 스킨 이름이 default 이기 때문에 해당 챔피언 이름으로 데이터 가공
   */
  data[championId].skins[0].name =
    data[championId].skins[0].name === 'default'
      ? data[championId].name
      : '기본 스킨';

  //<br /> 태그가 있는 경우 엔터로 바꿈
  data[championId].spells = ToolTipSlicing(
    data[championId].spells,
    '<br',
    '/>',
    '\n',
  );
  //<  > 사이값 불필요하므로 제거
  data[championId].spells = ToolTipSlicing(
    data[championId].spells,
    '<',
    '>',
    '',
  );
  //ex {{ wslowduration }} 이러한 괄호 안의 값들은 RIOT API에서 제공을 안하며, 보기가 불편하여 ? 값으로 변경
  data[championId].spells = ToolTipSlicing(
    data[championId].spells,
    '{{',
    '}}',
    '?',
  );

  data[championId].passive.description = ToolTipSlicing(
    data[championId].passive.description,
    '<',
    '>',
    '',
  );

  return data[championId];
};

/**
 * 배열 객체안의 문자열 중에서 바꾸고자 하는 값 범위와 바꾸고자 하는 값을 받아서 원하는 형태로 바꿈
 * 용도에 맞게 오버로딩.
 * @param {*} spells 객체가 담겨있는 배열
 * @param {*} start 자르고자 하는 범위 시작지점(문자열로도 가능)
 * @param {*} end 자르고자 하는 끝 지점(문자열로도 가능)
 * @param {*} changeWord 바꾸고자 하는 값
 * @returns 바꾼 후의 배열 객체
 */
const ToolTipSlicing = (words, start, end, changeWord) => {
  const length = end.length;
  if (typeof words === 'object') {
    return words.map((word) => {
      while (word.tooltip.indexOf(start) !== -1) {
        word.tooltip = word.tooltip.replace(
          word.tooltip.slice(
            word.tooltip.indexOf(start),
            word.tooltip.indexOf(end) + length,
          ),
          changeWord,
        );
      }
      return word;
    });
  } else {
    while (words.indexOf(start) !== -1) {
      words = words.replace(
        words.slice(words.indexOf(start), words.indexOf(end) + length),
        changeWord,
      );
    }
    return words;
  }
};

export default getDetailChampData;
