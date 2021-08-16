import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { championLineContext } from './champList';

const PositionDiv = styled.div`
  display: flex;
  margin-left: 20px;
`;

const PositionButton = styled.button`
  background-color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  padding: 15px 7px;
  line-height: 17px;
  font-size: 14px;
  color: #777;
  border-bottom: ${(props) =>
    props.clickStyle ? '2px solid transparent' : ''};
  border-bottom-color: ${(props) => (props.clickStyle ? ' #4990e2' : '')};
  color: ${(props) => (props.clickStyle ? '#4990e2' : '')}; ;
`;

function PositionList(props) {
  const [buttonStyle, setButtonStyle] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { setChampPosition } = useContext(championLineContext);

  return (
    <PositionDiv>
      <PositionButton
        clickStyle={buttonStyle[0]}
        onClick={() => {
          setChampPosition('All');
          setButtonStyle([true, false, false, false, false, false, false]);
        }}>
        전체
      </PositionButton>
      <PositionButton
        clickStyle={buttonStyle[1]}
        onClick={() => {
          setChampPosition('Tank');
          setButtonStyle([false, true, false, false, false, false, false]);
        }}>
        탱커
      </PositionButton>
      <PositionButton
        clickStyle={buttonStyle[2]}
        onClick={() => {
          setChampPosition('Fighter');
          setButtonStyle([false, false, true, false, false, false, false]);
        }}>
        전사
      </PositionButton>
      <PositionButton
        clickStyle={buttonStyle[3]}
        onClick={() => {
          setChampPosition('Assassin');
          setButtonStyle([false, false, false, true, false, false, false]);
        }}>
        암살자
      </PositionButton>
      <PositionButton
        clickStyle={buttonStyle[4]}
        onClick={() => {
          setChampPosition('Mage');
          setButtonStyle([false, false, false, false, true, false, false]);
        }}>
        마법사
      </PositionButton>
      <PositionButton
        clickStyle={buttonStyle[5]}
        onClick={() => {
          setChampPosition('Marksman');
          setButtonStyle([false, false, false, false, false, true, false]);
        }}>
        명사수
      </PositionButton>
      <PositionButton
        clickStyle={buttonStyle[6]}
        onClick={() => {
          setChampPosition('Support');
          setButtonStyle([false, false, false, false, false, false, true]);
        }}>
        서포터
      </PositionButton>
    </PositionDiv>
  );
}

export default PositionList;
