import {React, useEffect, useState} from 'react';
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

    const [infoDataBase, setInfoDataBase] = useState({ products: [] });
    const [infoDataBaseUser, setInfoDataBaseUser] = useState({ users: [] });

    useEffect(() => {
        fetch('/api/products')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setInfoDataBase(data)
                fetch('/api/users')
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        setInfoDataBaseUser(data)
                        
                    })
            })
            

    },[])



    













            function hallarMes(numeroDeMes){
                var contador = 0;
                if(infoDataBaseUser.users[1]){
                    for(let i = 0; i < infoDataBaseUser.users.length; i++){
                        var date = new Date(infoDataBaseUser.users[i].date);
                        var month =  date.getMonth() + 1
                        if( month === numeroDeMes){
                            contador = contador + 1 
                        }
                    }
                    return contador
                }
                
            };
            function hallarMesProductos(numeroDeMes){
                var contador = 0;
                if(infoDataBase.products[1]){
                    for(let i = 0; i < infoDataBase.products.length; i++){
                        var date = new Date(infoDataBase.products[i].date);
                        var month =  date.getMonth() + 1
                        if( month === numeroDeMes){
                            contador = contador + 1 
                        }
                    }
                    return contador
                }
                
            }
           

            











    const data= {
        labels: ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ag', 'Sept', 'Oct', 'Nov', 'Dic'  ],
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
            data: [hallarMes(1),hallarMes(2),hallarMes(3),hallarMes(4),hallarMes(5),hallarMes(6),hallarMes(7),hallarMes(8),hallarMes(9),hallarMes(10),hallarMes(11),hallarMes(12)]
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
                data: [hallarMesProductos(1),hallarMesProductos(2),hallarMesProductos(3),hallarMesProductos(4),hallarMesProductos(5),hallarMesProductos(6),hallarMesProductos(7),hallarMesProductos(8),hallarMesProductos(9),hallarMesProductos(10),hallarMesProductos(11),hallarMesProductos(12)]
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