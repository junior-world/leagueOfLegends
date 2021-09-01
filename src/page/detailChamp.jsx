import React, { createContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/main/NavBar';
import getDetailChampData from '../controller/detail_champ/getDetailChampData';
import DetailChampHeader from '../components/detail_champ/detailChampHeader';
import SkillInfo from '../components/detail_champ/skill_info/skillInfo';
import SkinInfo from '../components/detail_champ/skin_info/skinInfo';
import TipsInfo from '../components/detail_champ/tips_info/tipsInfo';
import styled from 'styled-components';

const MainContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
/* DetailChamp(챔피언 상세 정보) -> SkillInfo -> SkillContents -> SkillContent(passive, q, w, e, r) ->
 * SkillImg, SkillTtile, SkillCoolDown, SkillToolTip, SkillCost, SkillRange
 */
export const skillsContext = createContext({
  champSpells: [], //spells -> 배열 안에 q,w,e,r 객체 존재
  champPassive: {}, //passive -> 따로 객체로 존재
});

function DetailChamp(props) {
  const [detailLoading, setDetailLoading] = useState(false);
  const params = useParams();
  const detailChampData = useRef();

  useEffect(() => {
    getDetailChampData(params.champion_id)
      .then((res) => {
        detailChampData.current = res;
        setDetailLoading(true);
      })
      .catch((rej) => {
        props.history.push('/championInfo');
      });
  }, [params, props.history]);

  return (
    <div>
      <NavBar />

      {detailLoading && (
        <MainContents>
          <DetailChampHeader
            champId={detailChampData.current.id}
            champName={detailChampData.current.name}
            champPosition={detailChampData.current.tags}
            champLore={detailChampData.current.lore}></DetailChampHeader>
          <SkinInfo
            champId={detailChampData.current.id}
            champSkins={detailChampData.current.skins}
          />
          <skillsContext.Provider
            value={{
              champSpells: detailChampData.current.spells,
              champPassive: detailChampData.current.passive,
            }}>
            <SkillInfo />
          </skillsContext.Provider>
          <TipsInfo
            allyTips={detailChampData.current.allytips}
            enemyTips={detailChampData.current.enemytips}></TipsInfo>
        </MainContents>
      )}
    </div>
  );
}

export default DetailChamp;
