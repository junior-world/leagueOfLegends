import styled from 'styled-components';

const ToolTipDiv = styled.div`
  display: flex;
  white-space: pre-line;
  margin-bottom: 10px;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
`;

function SkillToolTip(props) {
  return <ToolTipDiv>{props.skillToolTip}</ToolTipDiv>;
}

export default SkillToolTip;
