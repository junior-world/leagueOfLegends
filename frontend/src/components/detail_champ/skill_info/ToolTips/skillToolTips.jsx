import styled from 'styled-components';
import SkillToolTip from './skillToolTip';
import SkillCooldown from './skillCooldown';
import SkillRange from './skillRange';
import SkillCost from './skillCost';

const ToolTipsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px 15px;
  width: 1000px;
`;

function SkillToolTips(props) {
  return (
    <ToolTipsSection>
      <SkillToolTip skillToolTip={props.skillToolTip} />
      <SkillCooldown
        skillCooldown={props.skillCooldown}
        isPassive={props.isPassive}
      />
      <SkillRange skillRange={props.skillRange} isPassive={props.isPassive} />
      <SkillCost skillCost={props.skillCost} isPassive={props.isPassive} />
    </ToolTipsSection>
  );
}

export default SkillToolTips;
