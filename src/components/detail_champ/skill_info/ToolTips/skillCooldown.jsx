import styled from 'styled-components';

const CooldownDiv = styled.div`
  display: flex;
  color: rgb(0, 0, 255);
  justify-content: center;
`;

function SkillCooldown(props) {
  return (
    <>
      {!props.isPassive && (
        <CooldownDiv>재사용대기시간(초) : {props.skillCooldown}</CooldownDiv>
      )}
    </>
  );
}

export default SkillCooldown;
