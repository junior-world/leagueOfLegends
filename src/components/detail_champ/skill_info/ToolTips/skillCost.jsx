import styled from 'styled-components';

const CostDiv = styled.div`
  display: flex;
  color: rgb(0, 0, 255);
  justify-content: center;
`;

function SkillCost(props) {
  return (
    <> {!props.isPassive && <CostDiv>소모 : {props.skillCost}</CostDiv>}</>
  );
}

export default SkillCost;
