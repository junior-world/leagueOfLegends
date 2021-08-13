import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 4px 8px 50px 10px rgb(0 0 0 / 30);
`;

const Ullist = styled.ul`
  list-style-type: None;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Lilist = styled.li`
  font-weight: 100;
  font-size: 17px;
  margin-left: auto;
`;

const NavBar = () => {
  return (
    <Header>
      <Ullist>
        <Lilist>
          <Link to='/'>Draft</Link>
        </Lilist>
        <Lilist>
          <Link to='/'>HOME</Link>
        </Lilist>
        <Lilist>
          <Link to='/championInfo'>챔피언 분석</Link>
        </Lilist>
        <Lilist>
          <Link to='/'>랭킹</Link>
        </Lilist>
        <Lilist>
          <Link to='/'>커뮤니티</Link>
        </Lilist>
      </Ullist>
    </Header>
  );
};

export default NavBar;
