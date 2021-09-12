import { useState } from 'react';
import styled from 'styled-components';
import DefaultHeader from '../../champ_info/defaultHeader';
import TipSelect from './tipSelect';
import TipsContents from './tipsContents';

const TipsDiv = styled.div`
  display: flex;
  width: 1000px;
  margin-top: 30px;
  flex-direction: column;
  font-size: 13px;
  margin-bottom: 100px;
`;

function TipsInfo(props) {
  const [buttonStyle, setButtonStyle] = useState([true, false]);
  return (
    <TipsDiv>
      <DefaultHeader headerTitle={'-챔피언 TIP'}></DefaultHeader>
      <TipSelect
        buttonStyle={buttonStyle}
        setButtonStyle={(data) => {
          setButtonStyle(data);
        }}
      />
      {buttonStyle[0] ? (
        <TipsContents tips={props.allyTips} />
      ) : (
        <TipsContents tips={props.enemyTips} />
      )}
    </TipsDiv>
  );
}

export default TipsInfo;
