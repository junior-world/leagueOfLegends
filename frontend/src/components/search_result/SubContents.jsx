import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CHAMPION_MASTERIES } from '../../config';
import Masteries from './Masteries';

const SubContent = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    width: 200px;
    height: 300px;
    border: 1px solid black;
`;
const SuperMaster = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const apiKEY = process.env.REACT_APP_API_KEY;

function SubContents({ searchInfo, champSummury }) {
    const [masteries, setMasteries] = useState();

    useEffect(() => {
        axios
            .get(`${CHAMPION_MASTERIES}${searchInfo.id}?api_key=${apiKEY}`)
            .then((res) => {
                let masters = [];
                for (let i = 0; i < 3; i++) {
                    masters = masters.concat(res.data[i]);
                }

                setMasteries(masters);
            });
    }, [searchInfo.id]);

    return (
        <SubContent>
            <SubContent>
                <SuperMaster>
                    {masteries &&
                        masteries.map((mastery) => (
                            <Masteries
                                key={mastery.championId}
                                mastery={mastery}
                                champSummury={champSummury}
                            />
                        ))}
                </SuperMaster>
            </SubContent>
        </SubContent>
    );
}

export default SubContents;
