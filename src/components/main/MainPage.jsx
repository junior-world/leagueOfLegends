import React from 'react';
import styled from 'styled-components';
import logo from '../../image/logo.png';
import { MdSearch } from 'react-icons/md';

const Hcontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 700px;
    align-items: center;
    margin: 0 auto;
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

function MainPage() {
    return (
        <Hcontainer>
            <div style={{ display: 'block' }}>
                <img
                    src={logo}
                    style={{ width: '50%', margin: '50px ' }}
                    alt='유미로고'
                />
            </div>
            <Form>
                <Input type='text' placeholder='소환사명'></Input>
                <Button>
                    <MdSearch size='30'></MdSearch>
                </Button>
            </Form>
        </Hcontainer>
    );
}

export default MainPage;
