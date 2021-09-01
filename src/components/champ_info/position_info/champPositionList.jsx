import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import GetAllChampData from '../../../controller/champ_info/getAllChampData';
import ChampImg from '../champImg';
import * as config from '../../../config';
import ChampName from '../champName';
import { championLineContext } from './champList';
import * as Hangul from 'hangul-js';
import { Link } from 'react-router-dom';

const ChampSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 10px;
`;

const ChampItem = styled.div`
  width: 90px;
  height: 110px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
`;

const HLink = styled(Link)`
  text-decoration: none;
`;

function ChampPositionList(props) {
  const [isPostionLoading, setIsPositionLoading] = useState(false); //axios 요청 전,후 구분
  const [allChampion, setAllChampion] = useState([]); //axios 반환 값(모든 챔피언 데이터)
  const { champPosition, searchValue } = useContext(championLineContext);

  useEffect(() => {
    GetAllChampData().then((res) => {
      setAllChampion(Object.entries(res).sort(SortDesc)); // 객체를 배열로 변환 후 가나다 순으로 정렬
      setIsPositionLoading(true);
    });
  }, []);

  return (
    <ChampSection>
      {isPostionLoading && searchValue !== '' // 검색 값 존재여부 ? 존재O : 존재X
        ? allChampion.map((champion) => {
            if (
              champion[1].name.includes(searchValue) ||
              champion[1].diassembled.includes(
                Hangul.disassemble(searchValue).join(''),
              )
            ) {
              return getPositionChampItem(champion, champPosition);
            } else {
              return '';
            }
          })
        : allChampion.map((champion) => {
            return getPositionChampItem(champion, champPosition);
          })}
    </ChampSection>
  );
}

/**
 * getRotationData에 있는 SortDesc랑 거의 동일 가,나,다 순 정렬
 */
function SortDesc(a, b) {
  if (a[1].name > b[1].name) return 1;

  if (b[1].name > a[1].name) return -1;

  return 0;
}

/**
 *
 * @param {*} champion allChampion data에서 하나씩 data를 전달받음.
 * @param {*} champPosition  사용자가 선택한 position 값(전체, 탱커, 전사, 암살자, 마법사, 명사수, 서포터)
 * @returns 사용자가 선택한 position 값과 챔피언의 position 값이 일치하는 경우 getChampItem(champion) 실행 후 반환
 */
const getPositionChampItem = (champion, champPosition) => {
  if (champPosition === 'All') {
    return getChampItem(champion);
  } else {
    return champion[1].tags.map((tag) => {
      if (tag === champPosition) {
        return getChampItem(champion);
      } else {
        return '';
      }
    });
  }
};
/**
 * ***리팩토리 대상(Link 부분을 하나의 컴포넌트로 그리고 props로 관리. 로테이션과 같이 사용할 수 있도록) ***
 * @param {*} champion allChampion data에서 하나씩 data를 전달받음.
 * @returns 해당되는 챔피언의 데이터를 통해 챔피언의 img 와 Name으로 만들어진 컴포넌트를 반환
 */
const getChampItem = (champion) => {
  return (
    <HLink
      key={champion[1].key}
      to={{
        pathname: '/championInfo/' + champion[1].id,
        state: { championId: champion[1].id },
      }}>
      <ChampItem key={champion[1].id + champion[1].name}>
        <ChampImg
          key={champion[1].id}
          imagePath={config.CHAMPION_ICON_IMG + champion[1].id + '.png'}
        />
        <ChampName
          key={champion[1].name} //lol 챔피언 이름은 중복 가능성이 없으므로 key로 사용
          champName={champion[1].name}
        />
      </ChampItem>
    </HLink>
  );
};

export default ChampPositionList;
