import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/main/NavBar';
import getDetailChampData from '../controller/detail_champ/getDetailChampData';
import DetailChampHeader from '../components/detail_champ/detailChampHeader';
import styled from 'styled-components';

const MainContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
      </MainContents>
    </div>
  );
}

export default DetailChamp;
