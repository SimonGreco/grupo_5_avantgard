import React from 'react';
import {Card, Typography, CardContent } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles' 
import 'fontsource-montserrat'



const useStyles = makeStyles (()=>({
    root : {
        textAlign : 'center',
        backgroundColor : 'rgb(73,155,234,1)',
       
    },
    texto: {
        fontSize: 18,
        color: 'white'
    },
    titulo: {
        fontWeight:'bold',
        fontSize: 20,
        color: 'white'
    },
    
}))

function Cards(props){
    


const classes = useStyles()
    return(

        
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.titulo}>
                    {props.titulo}
                </Typography>


                <Typography className={classes.texto}>
                    {props.texto}
                </Typography>
            </CardContent>


        </Card>

    )
}

export default Cards