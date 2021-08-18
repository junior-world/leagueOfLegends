import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rank from '../../../controller/ranking/getLadder';
import icon from '../../../controller/ranking/getProfileIcon';

const RankUser = styled.div`
    margin: 0 auto;
    border-bottom: 1px solid #d7dada;
`;

const UlStyle = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: None;
    margin-top: 1rem;
    margin: 0 auto;
`;

const LiStyle = styled.li`
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const UserName = styled.div``;

function LadderPage() {
    const [isRankLoading, setIsRankLoading] = useState(false);
    const [rankData, setRankData] = useState([]);
    // useEffect(() => {
    //     Getrank().then((res) => {
    //         setRotationData(res);
    //         setIsRotationLoading(true);
    //     });
    // }, []);

    useEffect(() => {
        Rank().then((res) => {
            setRankData(res);
            setIsRankLoading(true);
        });
        icon().then((res) => {});
    }, []);

    return (
        <RankUser>
            <UlStyle>
                <LiStyle>
                    <div>1</div>
                    {/* {isRankLoading &&
                        rankData
                            .map((rankObject, i) => {
                                return <div>{rankObject.summonerName}</div>;
                            })
                            .filter((c, i, a) => {
                                return i < 5;
                            })} */}
                </LiStyle>
            </UlStyle>
        </RankUser>
    );
}

export default LadderPage;
