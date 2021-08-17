import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { Route, Link } from 'react-router-dom';
import Rank from '../../../controller/ranking/getLadder';

const RankMenu = styled.div`
    margin: 0 auto;
`;

const OlStyle = styled.ol`
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0 auto;
    list-style-type: None;
`;

const LiStyle = styled.li`
    margin: 0 auto;
    text-align: center;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    float: left;
`;

const Form = styled.form`
    width: 30vw;
    border-radius: 25vw;
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 10%);
    display: flex;
    margin: 0 auto;
`;

const Input = styled.input`
    width: 100%;
    line-height: 17px;
    font-size: 14px;
    &:focus {
        outline: none;
    }
    background-color: transparent;
    border: none;
    padding: 15px 150px 18px 17px;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    margin: 5px 0 0 0;
    background-color: transparent;
`;

const ListButton = styled.button`
    margin: 0 auto;
`;

const RLink = styled(Link)`
    text-decoration: none;
    margin-right: 1em;
`;

const Buttons = () => {
    const history = useHistory();

    return (
        <div>
            <RLink to='/ranking/ladder'>랭킹</RLink>
            <RLink to='/ranking/champion'>챔피언</RLink>
            <ListButton onClick={() => history.push('/ranking/level')}>
                레벨
            </ListButton>
        </div>
    );
};

const RankMenuList = () => {
    useEffect(() => {
        Rank().then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <RankMenu>
            <OlStyle>
                <LiStyle>
                    <Buttons></Buttons>
                </LiStyle>
            </OlStyle>
            <Form>
                <Input type='text' placeholder='소환사명'></Input>
                <Button>
                    <MdSearch size='30'></MdSearch>
                </Button>
            </Form>
        </RankMenu>
    );
};

export default RankMenuList;
