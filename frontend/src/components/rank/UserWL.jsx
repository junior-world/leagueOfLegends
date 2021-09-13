import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function UserWinLose(props) {
    const winrate = () => {
        return (
            (props.rankCU.wins / (props.rankCU.wins + props.rankCU.losses)) *
            100
        ).toFixed(2);
    };

    return (
        <div>
            <Doughnut
                data={{
                    labels: [
                        props.rankCU.wins + '승',
                        props.rankCU.losses + '패',
                        '승률 : ' + winrate() + '%',
                    ],
                    datasets: [
                        {
                            data: [props.rankCU.wins, props.rankCU.losses, 0],
                            backgroundColor: ['blue', 'red', 'white'],
                        },
                    ],
                }}
                height={300}
                width={400}
                options={
                    {
                        // maintainAspectRatio: false, //비율 고정 해제
                        // legend: {
                        //     display: false,
                        // },
                        // scales: {
                        //     yAxes: [
                        //         {
                        //             ticks: {
                        //                 beginAtZero: true,
                        //             },
                        //         },
                        //     ],
                        // },
                    }
                }></Doughnut>
        </div>
    );
}

export default UserWinLose;
