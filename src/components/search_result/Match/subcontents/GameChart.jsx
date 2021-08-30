import React,{useRef,useEffect} from 'react'
import { Chart, registerables } from 'chart.js';
import styled from 'styled-components';
import getChart from '../../../../lib/Chart/ChartPlugin';



const ChartDiv = styled.div`
    width:300px;
    margin: 0 auto;
`


function GameChart(props) {

    const {arrList} = props;
    const canvasDom = useRef(null);

    useEffect(() => {
      const ctx = canvasDom.current.getContext('2d');
      Chart.register(...registerables);
  
    // chart.js 라이브러리 이용
     const doughnut = getChart(ctx,win,totalGame);
    
      return (()=>{
        doughnut.destroy();
      })

    }, [])


    let win = 0 ;
    let totalGame = 0;
    arrList.forEach( list =>{
        win += list.win;
        totalGame += list.count
    })
    

    return (
        <ChartDiv>
            <canvas ref={canvasDom}></canvas>
        </ChartDiv>
    )
}

export default GameChart
