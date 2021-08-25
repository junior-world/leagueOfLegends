import styled from 'styled-components';

const SelectDiv = styled.div`
  display: flex;
  border-bottom: solid 1px #e9eff4;
`;

const TipButton = styled.button`
  background-color: white;
  width: 500px;
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

function TipSelect(props) {
  return (
    <SelectDiv>
      <TipButton
        clickStyle={props.buttonStyle[0]}
        onClick={() => {
          props.setButtonStyle([true, false]);
        }}>
        사용법
      </TipButton>
      <TipButton
        clickStyle={props.buttonStyle[1]}
        onClick={() => {
          props.setButtonStyle([false, true]);
        }}>
        상대법
      </TipButton>
    </SelectDiv>
  );
}

export default TipSelect;
