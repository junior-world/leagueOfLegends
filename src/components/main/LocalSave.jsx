import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Col = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    text-align: left;
`
const Img = styled.img`
    width:50px;
    border-radius: 50px;
`
const Span = styled.span`
    font-size: 14px;
`
const BookMarks = styled(Link)`
    margin: 2rem 0 0 1rem;
`
const Button = styled.button`
    border: 2px solid #FF3333;
    color : white;
    width: 21px;
    font-size:14px;
    border-radius: 10px;
    background-color: #FF3333;
    position: absolute;
    top: 25px;
    right: 15px;
    cursor:pointer;
`

const Row = styled.div`
    display: flex;
    position: relative;

`

function LocalSave(props) {
    
    const {ls , removeHandler} = props;

    const onRemove = (e) =>{
        e.preventDefault();
        
        localStorage.removeItem(ls.name)
        removeHandler(e,ls.name)
    }

    return (
        <Row>
            <Button onClick={onRemove}>x</Button>
            <BookMarks to={`/summoners/${ls.name}`}>
                <Col>
                    <Img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${ls.profileIconId}.png`} alt={ls.profileIconId}/>
                    <Span>{ls.name}</Span>
                </Col> 
            </BookMarks>
        </Row>
        
       
            
        
    )
}

export default LocalSave
