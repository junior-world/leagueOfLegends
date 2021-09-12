import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MATCHLISTS_URL, SPELL_DATA, RUNS_DATA } from '../../config.js';
import MatchLists from './MatchLists';

const Main = styled.main`
    display: flex;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 857px;
`;

const Button = styled.button`
    border: 1px solid #dddddd;
    margin: 1rem auto;
    padding: 11px;
    background-color: transparent;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        box-shadow: 2px 9px 13px 1px rgb(0 0 0 / 20%);
    }
`;

const apiKEY = process.env.REACT_APP_API_KEY;

export const RiotContext = React.createContext({
    spellSummury: [],
    runsSummury: [],
});

const SearchMain = (props) => {
    const { searchInfo, champSummury } = props;

    const [matchLists, setMatchLists] = useState();
    const [spellSummury, setSpellSummury] = useState([]);
    const [runsSummury, setRunsSummury] = useState([]);
    const [count, setCount] = useState(0);
    const [run, setRun] = useState(true);

    // 스펠,챔피언,룬
    useEffect(() => {
        async function dddd() {
            const res = await axios({
                url: `${SPELL_DATA}`,
                method: 'GET',
                contentType: 'application/json',
            });

            setSpellSummury(Object.entries(res.data.data));

            const rune = await axios({
                url: `${RUNS_DATA}`,
                method: 'GET',
                contentType: 'application/json',
            });

            setRunsSummury(rune.data);
        }

        dddd();
    }, []);

    // 게임 리스트
    useEffect(() => {
        async function matchLists() {
            const res = await axios.get(
                `${MATCHLISTS_URL}${searchInfo.accountId}?endIndex=${
                    count + 5
                }&beginIndex=${count}&api_key=${apiKEY}`,
            );
            setCount(count + 5);
            setMatchLists(res.data.matches);
        }

        matchLists();
    }, [searchInfo.accountId]);

    const onClickHandler = (e) => {
        e.preventDefault();
        if (count > 15) {
            return;
        } else {
            setRun(false);
            axios
                .get(
                    `${MATCHLISTS_URL}${searchInfo.accountId}?endIndex=${
                        count + 5
                    }&beginIndex=${count}&api_key=${apiKEY}`,
                )
                .then((res) => {
                    const newMatchLists = matchLists.concat(res.data.matches);
                    setMatchLists(newMatchLists);
                    setRun(true);
                });
        }
        setCount(count + 5);
    };

    return (
        <Main>
            <Col>
                {matchLists &&
                    matchLists.map((matchList) => (
                        <RiotContext.Provider
                            key={matchList.timestamp}
                            value={{ spellSummury, runsSummury }}>
                            <MatchLists
                                matchList={matchList}
                                searchInfo={searchInfo}
                                champSummury={champSummury}
                                spellSummury={spellSummury}
                                runsSummury={runsSummury}
                            />
                        </RiotContext.Provider>
                    ))}

                <Col>
                    {run ? (
                        <Button onClick={onClickHandler}>더 보기</Button>
                    ) : (
                        <Button> 로딩,,,</Button>
                    )}
                </Col>
            </Col>
        </Main>
    );
};

export default SearchMain;
