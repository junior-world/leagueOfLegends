import React, { createContext, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ChampListHeader from './champListHeader';
import ChampPositionList from './champPositionList';

const ChampListSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin-top: 80px;
  border: solid 1px #e9eff4;
`;

export const championLineContext = createContext({
  champPosition: '',
  setChampPosition: () => {},
  searchValue: '',
  setSearchValue: () => {},
});

function ChampList(props) {
  const [champPosition, setChampPosition] = useState('All'); //포지션 선택 값
  const [searchValue, setSearchValue] = useState(''); // 검색한 값

  const value = useMemo(
    () => ({
      champPosition,
      setChampPosition,
      searchValue,
      setSearchValue,
    }),
    [champPosition, setChampPosition, searchValue, setSearchValue],
  );

  /**
   * 검색 값이 있을 때 position을 눌렀다면 검색 값을 비우고 input 초기화
   */
  useEffect(() => {
    setSearchValue('');
  }, [champPosition]);

  return (
    <ChampListSection>
      {/*useContextAPI*/}
      <championLineContext.Provider value={value}>
        <ChampListHeader />
        <ChampPositionList />
      </championLineContext.Provider>
    </ChampListSection>
  );
}

export default ChampList;
