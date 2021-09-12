import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DefaultHeader from '../defaultHeader';
import GetRotationData from '../../../controller/champ_info/getRotationData';
import ChampImg from '../champImg';
import * as config from '../../../config';
import ChampName from '../champName';
import { Link } from 'react-router-dom';
import BackendTest from '../../../controller/champ_info/backendTest';

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

const HLink = styled(Link)`
    text-decoration: none;
`;

function ChampRotation(props) {
    const [isRotationLoading, setIsRotationLoading] = useState(false);
    const [rotationData, setRotationData] = useState([]);

<<<<<<< HEAD:frontend/src/components/champ_info/rotation_info/champRotation.jsx
  useEffect(() => {
    BackendTest().then((res) => {
      console.log(res);
    });
    GetRotationData().then((res) => {
      setRotationData(res);
      setIsRotationLoading(true);
    });
  }, []);
=======
    useEffect(() => {
        GetRotationData().then((res) => {
            setRotationData(res);
            setIsRotationLoading(true);
        });
    }, []);
>>>>>>> feature/home:src/components/champ_info/rotation_info/champRotation.jsx

    return (
        <RotationSection>
            <DefaultHeader headerTitle={'- 금주의 로테이션 챔피언'} />
            <RotationMain>
                {isRotationLoading &&
                    rotationData.map((rotationObject, i) => {
                        return (
                            <HLink
                                key={rotationObject.id + rotationObject.name}
                                to={{
                                    pathname:
                                        '/championInfo/' + rotationObject.id,
                                    state: { championId: rotationObject.id },
                                }}>
                                <ChampItem
                                    key={
                                        rotationObject.id + rotationObject.name
                                    }>
                                    <ChampImg
                                        key={rotationObject.id}
                                        imagePath={
                                            config.CHAMPION_ICON_IMG +
                                            rotationObject.id +
                                            '.png'
                                        }
                                    />
                                    <ChampName
                                        key={rotationObject.name} //lol 챔피언 이름은 중복 가능성이 없으므로 key로 사용
                                        champName={rotationObject.name}
                                    />
                                </ChampItem>
                            </HLink>
                        );
                    })}
            </RotationMain>
        </RotationSection>
    );
}

export default ChampRotation;
