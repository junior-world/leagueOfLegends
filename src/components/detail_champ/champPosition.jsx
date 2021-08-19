import styled from 'styled-components';

const PositionDiv = styled.div`
  display: flex;
  color: #777;
  justify-content: center;
`;

const positionHangul = {
  Tank: '탱커',
  Fighter: '전사',
  Assassin: '암살자',
  Mage: '마법사',
  Marksman: '명사수',
  Support: '서포터',
};

const PositionContent = styled.div`
  margin-left: 5px;
`;

/**
 *
 * @param {*} champPosition 영어로 되어 있는 포지션 배열 값
 * @returns 한글로 되어 있는 포지션 배열 값
 */
const getPositionHangul = (champPosition) => {
  return champPosition.map((position) => {
    return position in positionHangul ? positionHangul[position] : '';
  });
};

function ChampPosition(props) {
  return (
    <PositionDiv>
      {getPositionHangul(props.champPosition).map((position) => {
        return <PositionContent key={position}>[{position}]</PositionContent>;
      })}
    </PositionDiv>
  );
}

export default ChampPosition;
