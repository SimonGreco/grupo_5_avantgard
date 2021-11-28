import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles' 
import 'fontsource-montserrat'
import '../assets/css/Tabla.css'

const StyledTableCell= withStyles(()=>({
    head:{
        color: 'black',
        background: 'white',
        textAlign: 'center'
    },
   body:{
        fontSize: 14,
    }
    }))(TableCell);

function TablaProductos(props){
    return(
        <TableContainer>
            <Table className='Tabla'>
            <TableHead>
            <TableRow>
               <StyledTableCell>Vídeo</StyledTableCell> 
               <StyledTableCell>Fecha de Publicación</StyledTableCell> 
               <StyledTableCell>Número de Visualizaciones</StyledTableCell> 
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell><img src={elemento.imagen} width="35px" height="25px"/>{"  "}{elemento.video}</TableCell>
                        <TableCell align="center">{elemento.fecha}</TableCell>
                        <TableCell align="center">{elemento.visualizaciones}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TablaProductos