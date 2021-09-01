import React, { useRef } from 'react';
import styled from 'styled-components';

const NameDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgStyle = styled.img`
  width: 82px;
  height: 82px;
  margin-left: 8px;
`;

function ChampName(props) {
  const WinLose = useRef();
  return (
    <NameDiv>
      {(() => {
        if (props.rankCU.tier === 'CHALLENGER') {
          return (
            <div>
              <div>{props.rankCU.tier}</div>
              <ImgStyle
                src={`/img/ranked-emblems/Emblem_${props.rankCU.tier}.png`}
                alt='티어사진'
              />
            </div>
          );
        }
      })()}
    </NameDiv>
  );
}

export default ChampName;
