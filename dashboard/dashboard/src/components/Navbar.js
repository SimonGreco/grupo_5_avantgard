import React from "react";
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import Menuicon from '@material-ui/icons/Menu'

const useStyles = makeStyles (()=>({
    root : {
        flexGrow : 1
    },
    menuButton:{
        marginRight: '16px'

    },
    title:{
        flexGrow:1
    },
    imagen:{
        borderRadius: '50%'
    }

}))

function Navbar(props){

    const classes = useStyles()
    return(
        <div className={classes.root}>
                <AppBar position="static">
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit'>
                        <Menuicon />
                    </IconButton>
                    <Typography  variant='h6' className={classes.title}>
                    AvantGard
                    </Typography>
                    <IconButton color='inherit'>
                           <img src={require('../assets/img/isotipo.png')} width='40px' height='40px' className={classes.imagen} alt='imagen del producto' />
                        </IconButton>
                </Toolbar>
                </AppBar>

        </div>
    )
}
export default Navbar