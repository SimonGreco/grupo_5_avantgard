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
            <StyledTableCell>Imagen</StyledTableCell> 
               <StyledTableCell>Vídeo</StyledTableCell> 
               <StyledTableCell>Fecha de Publicación</StyledTableCell> 
               <StyledTableCell>Número de Visualizaciones</StyledTableCell> 
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell align='center'><img  src={elemento.imagen}  width="80px"/></TableCell>
                        
                        <TableCell align='center' >{"  "}{elemento.video}</TableCell>
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