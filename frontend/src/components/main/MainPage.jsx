import React,{useState,useLayoutEffect} from 'react';
import styled from 'styled-components';
import logo from '../../image/logo.png';
import { MdSearch } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import LocalSave from './LocalSave';

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
const Row = styled.div`
    display: flex;
   
`

function MainPage() {

    const [value , setValue] = useState('');
    const [localSave, setLocalSave] = useState([])

    const history = useHistory();


    useLayoutEffect(() => {
        let newLocal = []
        for(let i =localStorage.length-1; i>=0; i--){
            newLocal = newLocal.concat( JSON.parse(localStorage.getItem(localStorage.key(i))))
            
        }
        
        newLocal.sort((a,b)=>{
            if(a.time > b.time){
                return -1;
            }else if(a.time < b.time){
                return 1;
            }else{
                return 0;
            }
        })
        setLocalSave(newLocal);
    }, [])
       

    const siteChange = (e) =>{
        e.preventDefault();
        history.push(`/summoners/${value}`)
    }

    const valueChangHandler = (e) =>{
        setValue(e.currentTarget.value);
    }

  
    const removeHandler = (e, name) =>{
        e.preventDefault();
        const newLocal = localSave.filter(save => save.name !== name)
        setLocalSave(newLocal)
    }
    
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
                <Input type='text' placeholder='소환사명' value={value} onChange={valueChangHandler} />
                <Button onClick={siteChange}>
                    <MdSearch size='30'></MdSearch>
                </Button>
            </Form>
       
            <Row>
                {
                localSave.map(ls => (
                    <LocalSave  key ={ls.name} 
                        ls={ls}
                        removeHandler={removeHandler}/>
                    ))
                }
            </Row>
            
           
        </Hcontainer>
    );
}

export default MainPage;
