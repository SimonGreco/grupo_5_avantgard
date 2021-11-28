import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles' 
import 'fontsource-montserrat'

const StyledTableCell = withStyles (()=>({
    head : {
        color: 'white',
        background : 'black',
        textAlign: 'center'
       
    },
    body: {
        fontSize: 14
    }
    
})(TableCell))

function TablaProductos(props){
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell> HOLA</StyledTableCell>
                        <StyledTableCell> HOLA</StyledTableCell>
                        <StyledTableCell> HOLA</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   
                        <TableRow >
                               <TableCell>
                                   <h1>Hola</h1>
                                   </TableCell> 
                                   <TableCell align='center'> HOOLA</TableCell>
                                   <TableCell align='center'>HOOOOOLA</TableCell>
                        </TableRow>
                   
                </TableBody>
                </Table>

        </TableContainer>
    )
}

export default TablaProductos