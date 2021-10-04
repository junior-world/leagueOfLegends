import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchInfo from '../components/search_result/search_info/SearchInfo';
import SearchNav from '../components/search_result/SearchNav';
import SearchMain from '../components/search_result/SearchMain';
import { getChampionAPI } from '../controller/search_result/riotJsonAPI';
import { getSummonerInfoAPI } from '../controller/search_result/riotAPI';

const Row = styled.div`
    display: flex;
    max-width: 1350px;
    margin: 0 auto;
`;

export const ChamSumContext = React.createContext({
    searchInfo: [],
    champSummury: [],
});

function SearchResult() {
    //주소창 value 부분 가져오는 것
    const summonerName = useParams();

    const [searchInfo, setSearchInfo] = useState();
    const [champSummury, setChampSummury] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getSummonerInfoAPI(summonerName.summonersName)
            .then((res) => {
                setSearchInfo(res.data);
            })
            .catch((res) => setError(true));

        return () => {
            setSearchInfo();
        };
    }, [summonerName.summonersName]);

    useEffect(() => {
        getChampionAPI().then((res) =>
            setChampSummury(Object.entries(res.data.data)),
        );
    }, []);

    if (searchInfo) {
        //최근 본 유저를 localStorage에 저장
        recentsUserList(searchInfo);
    }

    return (
        <div>
            {searchInfo && (
                <>
                    <SearchInfo searchInfo={searchInfo} />
                    <hr />
                    <SearchNav />
                    <Row>
                        <ChamSumContext.Provider
                            value={{ champSummury, searchInfo }}>
                            <SearchMain />
                        </ChamSumContext.Provider>
                    </Row>
                </>
            )}
            {error && <div>소환사가 존재하지 않습니다.</div>}
        </div>
    );
}

export default SearchResult;

/**
 *
 * @param {*검색한 플레이어의 정보} searchInfo
 */
const recentsUserList = (searchInfo) => {
    const item = {
        name: searchInfo.name,
        profileIconId: searchInfo.profileIconId,
        time: Date.now(),
    };

    localStorage.setItem(searchInfo.name, JSON.stringify(item));
};
