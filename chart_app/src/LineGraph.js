import React from 'react';
import { Line } from "react-chartjs-2";

function LineGraph(props) {
    const data={
        labels:['Jan','Feb','Mar','Apr','May'],
        datasets:[
            {
                label:'Sales for 2020 (M)',
                data:[3,2,2,1,5],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(255,206,86,0.2)'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
                pointBorderColor: 'rgba(255,206,86,0.2)'
            },
            {
                label:'Sales for 2021 (M)',
                data:[1,6,5,4,3],
                borderColor: ['rgba(157,475,86,0.2)'],
                backgroundColor: ['rgba(157,475,86,0.2)'],
                pointBackgroundColor: 'rgba(157,475,86,0.2)',
                pointBorderColor: 'rgba(157,475,86,0.2)'
            }
        ]
    };
    const options={
        title:{
            display:true,
            text:'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min:0,
                        max:7,
                        stepSize:1
                    }
                }
            ]
        }
    };
    return <Line data={data} options={options}/>;
}

export default LineGraph;