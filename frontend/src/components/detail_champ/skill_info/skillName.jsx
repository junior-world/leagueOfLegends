import styled from 'styled-components';

const NameDiv = styled.div`
  display: flex;
  white-space: pre-wrap;
  width: 150px;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e9eff4;
`;

function SkillName(props) {
  return <NameDiv>{props.skillName}</NameDiv>;
}

export default SkillName;
