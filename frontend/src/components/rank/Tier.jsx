import React from 'react';
import styled from 'styled-components';

const NameDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgStyle = styled.img`
  width: 41px;
  height: 41px;
  margin-left: 8px;
`;

const TierName = styled.div`
  display: flex;
  justify-items: center;
  text-align: center;
  margin: 0 auto;
  align-items: center;
  vertical-align: middle;
  margin-left: 5px;
`;

function Tier(props) {
  // const tier = props.rankCU.tier === 'CHALLENGER'){

  // }

  /* {() => {
        if (props.rankCU.tier === 'CHALLENGER') { */

  return (
    <NameDiv>
      <ImgStyle
        src={`/img/ranked-emblems/Emblem_${props.rankCU.tier}.png`}
        alt='티어사진'
      />
      <TierName>{props.rankCU.tier}</TierName>
    </NameDiv>
  );
}

export default Tier;
