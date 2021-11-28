import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Grafica(props){
    const data= {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre' ],
        datasets:[
            {
            label:'Usuarios registrados',
            fill:true,
            backgroundColor:'rgba(73,155,234,1)',
            borderColor: 'rgba(73,155,234,1)',
            pointBorderColor : 'rgba(73,155,234,1)',
            pointBorderWidth:1,
            pointHoverRadius:5,
            pointHoverBackgroundColor: 'rgba(73,155,234,1)',
            pointHoverBorderColor: 'rgba(73,155,234,1)',
            pointRadius:1,
            pointHitRadius: 10,
            data: [.17,19,156,357,565,1149]
            },
            {
                label:'Productos publicados',
                fill:true,
                backgroundColor:'red',
                borderColor: 'red',
                pointBorderColor : 'red',
                pointBorderWidth:1,
                pointHoverRadius:5,
                pointHoverBackgroundColor: 'red',
                pointHoverBorderColor: 'red',
                pointRadius:1,
                pointHitRadius: 10,
                data: [0,3,5,357,5,1]
                }

        ]

    }

    return(
        <div>
            <Line data={data} className='containerGrafica'  />
        </div>
    )
}

export default Grafica