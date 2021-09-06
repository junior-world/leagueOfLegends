import styled from 'styled-components';

const RangeDiv = styled.div`
  display: flex;
  color: rgb(0, 0, 255);
  justify-content: center;
`;

function SkillRange(props) {
  return (
    <>{!props.isPassive && <RangeDiv>범위 : {props.skillRange}</RangeDiv>}</>
  );
}

export default SkillRange;
