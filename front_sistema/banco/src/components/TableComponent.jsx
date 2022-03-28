import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function TableComponents(dados) {
    let dat = new Array();
    dat =dados;

    const formatData=(data)=>{
        let n = new Date(data)
        return `${n.getDate()}/${n.getMonth()}/${n.getFullYear()}`
    }
    
    console.log(dados)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Data</StyledTableCell>
            <StyledTableCell align="right">Valor</StyledTableCell>
            <StyledTableCell align="right">Tipo</StyledTableCell>
            <StyledTableCell align="right">Nome Operador Transação</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {dados.dados.map((row) => (
            <StyledTableRow key={row.id}>
                 <StyledTableCell component="th" scope="row">
                {
                   formatData(row.data_transferencia)
                
                }
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.valor}
              </StyledTableCell>
              <StyledTableCell align="right">{row.tipo}</StyledTableCell>
              <StyledTableCell align="right">{row.nome_operador_transacao}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
