import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RotationHeader from './rotationHeader';
import GetRotationData from '../../../controller/champ_info/getRotationData';
import ChampImg from '../champImg';
import * as config from '../../../config';
import ChampName from '../champName';

const RotationSection = styled.div`
  display: flex;
  width: 1200px;
  border: solid 1px #e9eff4;
  margin-top: 80px;
  flex-direction: column;
`;

const RotationMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const ChampItem = styled.div`
  width: 90px;
  height: 110px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
`;

function ChampRotation(props) {
  const [isRotationLoading, setIsRotationLoading] = useState(false);
  const [rotationData, setRotationData] = useState([]);

  useEffect(() => {
    GetRotationData().then((res) => {
      setRotationData(res);
      setIsRotationLoading(true);
    });
  }, []);

  return (
    <RotationSection>
      <RotationHeader />
      <RotationMain>
        {isRotationLoading &&
          rotationData.map((rotationObject, i) => {
            return (
              <ChampItem key={rotationObject.id + rotationObject.name}>
                <ChampImg
                  key={rotationObject.id}
                  imagePath={
                    config.CHAMPION_ICON_IMG + rotationObject.id + '.png'
                  }
                />
                <ChampName
                  key={rotationObject.name} //lol 챔피언 이름은 중복 가능성이 없으므로 key로 사용
                  champName={rotationObject.name}
                />
              </ChampItem>
            );
          })}
      </RotationMain>
    </RotationSection>
  );
}

export default ChampRotation;
