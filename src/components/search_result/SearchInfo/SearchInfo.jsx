import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import SummonersTier from './SummonersTier';
import {getTierAPI} from '../../../controller/search_result/riotAPI';

const Header = styled.header`
    max-width: 1350px;
    margin: 2rem auto;
    display: flex;
`
const DivCol = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 1rem;
    margin-top: 2rem;

`
const UpDiv = styled(DivCol)`
    margin-left: 2rem;
    margin-top: 2rem;
`


const AbDiv = styled.div`
    background-color: black;
    border-radius: 10px;
    height: 22px;
    width: 3rem;
    position: absolute;
    top: 83%;
    right: 24%;
`
const AbP = styled.p`
    margin: 0;
    text-align: center;
    color: white;
`
const H3 = styled.h3`
    margin: 0 auto;
    font-size: 28px;
    margin-bottom: 10px;
`
 const Button = styled.button`
    border: 1px solid #dddddd;
    margin: 0 auto;
    padding: 10px;
    background-color: transparent;
    border-radius: 15px;
`

const SearchInfo = (props) => {

    const {searchInfo } = props   
    const [summonnerTier, setSummonnerTier] = useState();

    useEffect(() => {

        getTierAPI(searchInfo.id).then(res => {
            if(res.status === 200){
                setSummonnerTier(res.data)
            }else{

            }
        })
    }, [searchInfo.id])
    

    return (
        <Header>
            {summonnerTier &&
                <>
                    <DivCol>
                         <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${searchInfo.profileIconId}.png`} alt="프로필사진" style={{borderRadius:'10px',width:'100px'}}/>
                        <AbDiv>
                            <AbP>{searchInfo.summonerLevel}</AbP>
                        </AbDiv>
                    </DivCol>
                    <UpDiv>
                        <H3>{searchInfo.name}</H3>
                        <Button>업데이트</Button>
                    </UpDiv>


                     <SummonersTier summonnerTier={summonnerTier}/>  
                </>}
            
        </Header>
        
    )
}

export default SearchInfo;