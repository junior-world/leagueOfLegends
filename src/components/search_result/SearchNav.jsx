import React,{}from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
    max-width: 1350px;
    display: flex;
    margin: 0 auto;
`
const Button = styled.button`
    border: 1px solid #dddddd;
    margin: 2rem auto;
    padding: 11px;
    background-color: transparent;
    border-radius: 15px;
`
const Div = styled.div`
    margin-left: 0.5rem;
`


const SearchNav = () => {
  

    return (
        <Nav>
            <Div>
                <Button> 전체 </Button>
            </Div>
            <Div>
                <Button> 솔로 랭크 </Button>
            </Div>
            <Div>
                <Button> 자유 랭크 </Button>
            </Div>
        </Nav>
    );
};

export default SearchNav;