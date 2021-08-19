import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/main/NavBar';
import getDetailChampData from '../controller/detail_champ/getDetailChampData';
import DetailChampHeader from '../components/detail_champ/detailChampHeader';
import SkillInfo from '../components/detail_champ/skill_info/skillInfo';
import styled from 'styled-components';

const MainContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
/* DetailChamp(챔피언 상세 정보) -> SkillInfo -> SkillContents -> SkillContent(passive, q, w, e, r) ->
 * SkillImg, SkillTtile, SkillCoolDown, SkillToolTip, SkillCost, SkillRange 로 컴포넌트가 깊어짐
 * contextAPI를 사용하여 효율적으로 state, props 관리
 */

function DetailChamp(props) {
  const [detailLoading, setDetailLoading] = useState(false);
  const params = useParams();
  const DetailChampData = useRef();

  useEffect(() => {
    getDetailChampData(params.champion_id)
      .then((res) => {
        DetailChampData.current = res;
        setDetailLoading(true);
      })
      .catch((rej) => {
        props.history.push('/championInfo');
      });
  }, [params, props.history]);

  return (
    <div>
      <NavBar />
      <MainContents>
        {detailLoading && (
          <DetailChampHeader
            champId={DetailChampData.current.id}
            champName={DetailChampData.current.name}
            champPosition={DetailChampData.current.tags}></DetailChampHeader>
        )}
        <SkillInfo />
      </MainContents>
    </div>
  );
}

export default DetailChamp;
