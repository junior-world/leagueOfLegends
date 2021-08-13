import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
    background-color: white;
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 10%);
    padding: 0 3rem;
`;

const UlStyle = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: None;
    margin-top: 1rem;
    margin: 0 auto;
`;

const LiStyle = styled.li`
    display: flex;
    font-weight: 900;
    line-height: 48px;
    margin: 0 auto;
    font-size: 17px;
    padding-bottom: '5px';
    border-radius: '5px';
`;

const HLink = styled(Link)`
    align-items: center;
    color: black;
    padding: 13px;
    text-decoration: none;
    &:hover {
        color: rgb(192, 192, 192);
    }
    &.logo {
        font-style: oblique;
        font-size: 36px;
    }
`;

function NavBar() {
    return (
        <Header>
            <UlStyle>
                <LiStyle>
                    <HLink className='logo' to='/'>
                        DRAFT
                    </HLink>
                </LiStyle>
                <LiStyle>
                    <HLink to='/'>Home</HLink>
                </LiStyle>
                <LiStyle>
                    <HLink to='/'>챔피언 정보</HLink>
                </LiStyle>
                <LiStyle>
                    <HLink to='/'>랭킹</HLink>
                </LiStyle>
                <LiStyle>
                    <HLink to='/'>커뮤니티</HLink>
                </LiStyle>
                <LiStyle>
                    <HLink login='true' className='login' to='/'>
                        로그인
                    </HLink>
                </LiStyle>
            </UlStyle>
        </Header>
    );
}

export default NavBar;
