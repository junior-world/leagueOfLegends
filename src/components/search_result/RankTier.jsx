import React from 'react';
import styled from 'styled-components';

const TierDiv = styled.div`
<<<<<<< HEAD
  width: 120px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 1rem;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
`;
const Contents = styled.span`
  color: ${(p) => p.color};
  display: flex;
  font-size: 14px;
  & > p {
    margin: 0;
    margin-right: 5px;
    color: #1f8ecd;
  }
`;
const Img = styled.img`
  width: 110px;
`;
const RankTier = (props) => {
  const { rankMode, color } = props;

  return (
    <>
      <TierDiv>
        <Img
          src={`/img/ranked-emblems/Emblem_${rankMode.tier}.png`}
          alt='티어사진'
        />
      </TierDiv>
      <TierDiv>
        <Contents>{rankMode.type}</Contents>
        <Contents color={color[rankMode.tier]}>
          {rankMode.tier} {rankMode.rank}
        </Contents>
        <Contents>
          <p>{rankMode.point}LP</p> {rankMode.win}승/{rankMode.lose}패
        </Contents>
        <Contents>
          승률{' '}
          {isNaN(
            ((rankMode.win / (rankMode.win + rankMode.lose)) * 100).toFixed(),
          )
            ? '0'
            : ((rankMode.win / (rankMode.win + rankMode.lose)) * 100).toFixed()}
          %
        </Contents>
      </TierDiv>
    </>
  );
};

export default RankTier;
=======
    width: 120px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 1rem;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
`
const Contents = styled.span`
    color: ${p =>p.color};
    display: flex;
    font-size: 14px;
    & > p {
        margin:0;
        margin-right:5px;
        color: #1f8ecd;
    }

`
const Img = styled.img`
    width:110px;
`
const RankTier = (props) => {

     const {rankMode,color} =props;

    return (
        <>
            <TierDiv>
                <Img src={`/img/ranked-emblems/Emblem_${rankMode.tier}.png`} alt="티어사진" />
            </TierDiv>
            <TierDiv>
                <Contents>{rankMode.type}</Contents>
                <Contents color = {color[rankMode.tier]}>{rankMode.tier} {rankMode.rank}</Contents>
                <Contents><p>{rankMode.point}LP</p> {rankMode.win}승/{rankMode.lose}패</Contents>
                <Contents>승률 {isNaN((rankMode.win/(rankMode.win+rankMode.lose)*100).toFixed()) ? '0' :(rankMode.win/(rankMode.win+rankMode.lose)*100).toFixed()}%</Contents>
            </TierDiv>
        </>
    );
};

export default RankTier;
>>>>>>> f2ad9f37354f9dde2ac7bf666bd713126bc2774b
