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

function Dashboard(props){
    const classes = useStyles()
    return(
        <div className={classes.root}>
           <Header />
           <LeftSideBar />
            <Grid container spacing={3} className={classes.SeparacionDeGrid}>
           <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
            <CardsHeader icono={<PeopleAltIcon className={classes.iconos} />} titulo='Usuarios' texto='cantidad de usuarios' color='#11111' font='black'>

            </CardsHeader>

           </Grid>
           <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
           <CardsHeader icono={<CategoryIcon className={classes.iconos} />} titulo='Categorias' texto='cantidad de categorias' color='#11111' font='black'>

</CardsHeader>

           </Grid>
           <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
           <CardsHeader icono={<ViewListIcon className={classes.iconos} />} titulo='Productos' texto='cantidad de productos' color='#11111' font='black'>

</CardsHeader>

           </Grid>

            <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                <Cards titulo='Cantidad 1' texto='cantidad 1'  />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Cards titulo='Cantidad 1' texto='cantidad 1'  />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Cards titulo='Cantidad 1' texto='cantidad 1'  />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Cards titulo='Cantidad 1' texto='cantidad 1'  />
            </Grid>

            </Grid>




            <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={ classes.containerGrafica} >

                <Grafica />
            </Grid>


            <Grid item xs={12} className={classes.containerTabla}>
                
                
            </Grid>








           </Grid>

        </div>
    );
}

export default Dashboard