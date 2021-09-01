import styled from 'styled-components';
import DefaultHeader from '../../champ_info/defaultHeader';
import SkillContents from './skillContents';

const SkillSection = styled.div`
  display: flex;
  width: 1000px;

  margin-top: 30px;
  flex-direction: column;
  font-size: 13px;
  margin-bottom: 50px;
`;

const DescriptionText = styled.div`
  display: flex;
  color: #ffc659;
  font-weight: 800;
`;

function SkillInfo(props) {
  return (
    <SkillSection>
      <DefaultHeader headerTitle={'- 스킬 정보'} />
      <SkillContents />
      <DescriptionText>
        [?]로 표시된 값은 Riot API 에서 제공하지 않는 데이터입니다.
      </DescriptionText>
      <DescriptionText>
        정확한 수치는 LOL클라이언트에서 확인 하실 수 있습니다.
      </DescriptionText>
    </SkillSection>
  );
}

export default SkillInfo;
