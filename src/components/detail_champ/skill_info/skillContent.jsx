import styled from 'styled-components';
import SkillImg from './skillImg';
import SkillName from './skillName';
import SkillToolTips from './ToolTips/skillToolTips';

const ContentSection = styled.div`
  display: flex;
  border-bottom: 1px solid #e9eff4;
`;

function SkillContent(props) {
  return (
    <ContentSection>
      <SkillImg skillImg={props.skillImg} />
      <SkillName skillName={props.skillName} />
      <SkillToolTips
        isPassive={props.isPassive}
        skillToolTip={props.skillToolTip}
        skillCooldown={props.skillCooldown}
        skillRange={props.skillRange}
        skillCost={props.skillCost}
      />
    </ContentSection>
  );
}

export default SkillContent;
