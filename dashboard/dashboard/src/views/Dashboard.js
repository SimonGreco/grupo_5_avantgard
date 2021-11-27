import React from "react";
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Navbar from '../components/Navbar' 
import 'fontsource-montserrat'
import Header from '../components/Header'
import LeftSideBar from "../components/LeftSideBar";
import 'font-awesome/css/font-awesome.min.css';


const useStyles = makeStyles (()=>({
    root : {
        flexGrow : 1
    }
}))

function Dashboard(props){
    const classes = useStyles()
    return(
        <div className={classes.root}>
           <Header />
           <LeftSideBar />
        </div>
    );
}

export default Dashboard