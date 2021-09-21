import { Chart } from "chart.js"; 



export default function getChart(ctx, win ,totalGame) {

    const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [
            `승리:${win}` ,
            `패배:${totalGame-win}`
          ],
          datasets: [
            {
              label: "매치",
              data: [win, totalGame-win],
              backgroundColor: [
                '#0066FF',
                '#FF3333',
                ],
                hoverBackgroundColor: [
                '#0066FF',
                '#FF3333',
                ],
            },
          ],
        }, 
        plugins : [{
          beforeDraw: function(chart) {
    
            let width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
        
            ctx.restore();
            let fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
        
            let text = `${((win/totalGame)*100).toFixed()}%`,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 1.8;
        
            ctx.fillText(text, textX, textY);
            ctx.save();
            
            }
          },
        ]
      });
      return chart;
}


