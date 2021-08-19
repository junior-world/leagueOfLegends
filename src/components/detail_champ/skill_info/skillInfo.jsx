import styled from 'styled-components';
import DefaultHeader from '../../champ_info/defaultHeader';
import SkillContents from './skillContents';

const SkillSection = styled.div`
  display: flex;
  width: 1000px;
  border: solid 1px #e9eff4;
  margin-top: 80px;
  flex-direction: column;
`;

function SkillInfo(props) {
  return (
    <SkillSection>
      <DefaultHeader headerTitle={'- 스킬 정보'} />
      <SkillContents />
    </SkillSection>
  );
}

export default SkillInfo;
