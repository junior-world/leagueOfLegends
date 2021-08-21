import { useContext } from 'react';
import styled from 'styled-components';
import { skillsContext } from '../../../page/detailChamp';
import SkillContent from './skillContent';
import * as config from '../../../config.js';

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

//getDetailChampData 에서 skillName을 미리 가공해서 주는 것이 좋은가, 여기서 가공을 하는 것이 좋은가
const nameInsert = ['\n(Q)', '\n(W)', '\n(E)', '\n(R)'];

function SkillContents(props) {
  const { champSpells, champPassive } = useContext(skillsContext);

  return (
    <ContentsDiv>
      {/* 패시브 */}
      <SkillContent
        isPassive={true}
        skillImg={config.CHAMPION_PASSIVE_IMG + champPassive.image.full}
        skillName={champPassive.name + '\n(passive)'}
        skillToolTip={champPassive.description}
        skillCooldown={false}
        skillRange={false}
        skillCost={false}
      />
      {champSpells.map((spell, index) => {
        return (
          // propTypes를 사용해서 props 유효성검사가 가능, 일단 보류
          <SkillContent
            key={spell.id}
            isPassive={false}
            skillImg={config.CHAMPION_SKILL_IMG + spell.image.full} //string
            skillName={spell.name + nameInsert[index]} //string + (Q, W, E ,R 어떠한 스킬인지에 대한 추가 정보)
            skillToolTip={spell.tooltip} //string
            skillCooldown={spell.cooldownBurn} //string
            skillRange={spell.rangeBurn}
            skillCost={spell.costBurn} //string
          />
        );
      })}
    </ContentsDiv>
  );
}

export default SkillContents;
