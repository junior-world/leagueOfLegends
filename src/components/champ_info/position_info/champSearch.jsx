import React, { useContext } from 'react';
import styled from 'styled-components';
import { championLineContext } from './champList';

const SearchDiv = styled.div`
  display: flex;
  margin-right: 30px;
`;

const SearchInput = styled.input`
  height: 36px;
  width: 193px;
  border: none;
  background: #f7f7f7;
  line-height: 15px;
  font-size: 12px;
  color: #9b9b9b;
  padding: 9px 0 10px 10px;
  box-sizing: border-box;
`;

function ChampSearch(props) {
  const { searchValue, setSearchValue } = useContext(championLineContext);

  const HandleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <SearchDiv>
      <SearchInput
        placeholder='챔피언 검색 ( 가렌, ㄱㄹ, ...)'
        onChange={HandleInputChange}
        value={searchValue}></SearchInput>
    </SearchDiv>
  );
}

export default ChampSearch;
