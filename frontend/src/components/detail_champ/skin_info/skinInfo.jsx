import React from 'react';
import styled from 'styled-components';
import DefaultHeader from '../../champ_info/defaultHeader';
import SkinsSlide from './skinsSlide';

const SkinSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

function SkinInfo(props) {
  return (
    <SkinSection>
      <DefaultHeader headerTitle={'- 스킨 정보'} />
      <SkinsSlide champId={props.champId} champSkins={props.champSkins} />
    </SkinSection>
  );
}

export default SkinInfo;
