import React from "react";
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Navbar from '../components/Navbar' 
import 'fontsource-montserrat'
import Header from '../components/Header'
import LeftSideBar from "../components/LeftSideBar";
import 'font-awesome/css/font-awesome.min.css';
import CardsHeader from "../components/CardsHeader";
import Cards from "../components/Cards";
import Grafica from '../components/Grafica'
import TablaProductos from "../components/TablaProductos";
import Footer from "../components/Footer";


import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CategoryIcon from '@material-ui/icons/Category';
import ViewListIcon from '@material-ui/icons/ViewList';



const useStyles = makeStyles (()=>({
    root : {
        flexGrow : 1
    },
    iconos: {
        color: 'black'
    },
    SeparacionDeGrid:{
        marginLeft:"17%",
        width: '83%'
    },
    container:{
        paddingTop: '40px',
        alignItems: 'center'
    },
    containerGrafica: {
        marginTop:'40px',
        backgroundColor:'rgb(73,155,234,1)'
        
    },
    containerTabla:{
        marginTop:'40px'
    }
}))

const data = [
    {
      id:1,
      video:
        "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
      fecha: "6 de sep. 2020",
      visualizaciones: 32,
      imagen: '',
    },
    {
      id:2,
        video:
          "Cómo Solucionar Error al Crear Applicación de React JS",
        fecha: "5 de sep. 2020",
        visualizaciones: 31,
        imagen: '',
      },
      {
      id:3,
        video:
          "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
        fecha: "4 de sep. 2020",
        visualizaciones: 21,
        imagen: '',
      },
  ];







function Dashboard(props){
    const classes = useStyles()
    return(
        <div className={classes.root}>
           <Header />
           <LeftSideBar />
            <Grid container spacing={3} className={classes.SeparacionDeGrid}>
           <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
            <CardsHeader icono={<PeopleAltIcon className={classes.iconos} />} titulo='Cantidad de usuarios' texto='100' color='#11111' font='black'>

            </CardsHeader>

           </Grid>
           <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
           <CardsHeader icono={<CategoryIcon className={classes.iconos} />} titulo='Cantidad de Categorias' texto='3' color='#11111' font='black'>

</CardsHeader>

           </Grid>
           <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
           <CardsHeader icono={<ViewListIcon className={classes.iconos} />} titulo='Cantidad de productos' texto='37' color='#11111' font='black'>

</CardsHeader>

           </Grid>

            <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                <Cards titulo='Total de ventas' texto='300'  />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Cards titulo='Ventas del ultimo mes' texto='4'  />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Cards titulo='Preguntas Recibidas' texto='105'  />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Cards titulo='Compras en proceso' texto='4'  />
            </Grid>

            </Grid>




            <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={ classes.containerGrafica} >

                <Grafica />
            </Grid>


            <Grid item xs={12} className={classes.containerTabla}>
                    <TablaProductos data={data}/>
                    </Grid>







           </Grid>

           <Footer />

        </div>
    );
}

export default Dashboard