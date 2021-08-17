import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

// const ChTest = () => {
//     useEffect(() => {
//         axios.get(
//             `${config.CHALLENGER_LEAGE}?api_key=${process.env.REACT_APP_API_KEY}`,
//         );
//     }, []);
// };

function LadderPage() {
    const [isRotationLoading, setIsRotationLoading] = useState(false);
    const [rotationData, setRotationData] = useState([]);
    // useEffect(() => {
    //     Getrank().then((res) => {
    //         setRotationData(res);
    //         setIsRotationLoading(true);
    //     });
    // }, []);

    return (
        <RankUser>
            <UlStyle>
                <LiStyle>
                    {isRotationLoading &&
                        rotationData.map((rotationObject, i) => {
                            return { rotationObject };
                        })}
                    {/* <span>
                            <ChTest></ChTest>
                        </span> */}
                </LiStyle>
            </UlStyle>
        </RankUser>
    );
}

export default LadderPage;
