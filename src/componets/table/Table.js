import React, { useEffect, useRef, useState } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { Button, IconButton, Modal } from '@material-ui/core';
import ActionForm from '../actionForm/ActionForm';
import PropTypes from 'prop-types';

//css
import './Table.css'
import { useDispatch } from 'react-redux';
import { getData } from '../../slices/tableSlice';

const StyledTableCell = withStyles((theme) => ({
  
  head: {
    backgroundColor: theme.palette.common.green,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    maxWidth: 1400,
  },
  TableHead:{
    backgroundColor: "#fff",
  }
});
	
export default function CustomizedTables({tableTitles, tableBody}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const idToShow = useRef(null);
  const idToDelete = useRef(null);

  const handleClick = id => {
    idToShow.current = id
    setOpen(true)
  }

  const handleDelete = () =>{
    if(idToDelete.current){
      let fullTableD = JSON.parse(localStorage.getItem("tableData"));
      let filteredD = fullTableD.filter(tb => tb.id !== idToDelete.current);
      localStorage.setItem("tableData", JSON.stringify(filteredD));
      dispatch(getData(filteredD)) 
      setDeleteConfirm(false)
    }else{
      setDeleteConfirm(false)
      return
    }
  }

  const handleClose = () =>{
    setOpen(false)
  }
  console.log("table titles -->", tableTitles)
  return (
    <div className="table-content">
        <Button className="table-add-btn" onClick={() => handleClick(null)} variant="contained">
        Add New  
        </Button>
      <main>
        
      <TableContainer className="table-container" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className="table-row">
            {tableTitles.map(title => (
              <StyledTableCell key={title}>{title}</StyledTableCell>
            ))}
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.map((row) => (
            <StyledTableRow key={row.id} className="table-data" onClick={() => handleClick(row.id)} key={row.id}>
                {tableTitles.map(t => (
                  <StyledTableCell key={t}>
                    {row[t]}
                  </StyledTableCell>
                ))}
                <StyledTableCell>
                  <IconButton onClick={(e) => {
                      e.stopPropagation()
                      idToDelete.current = row.id
                      setDeleteConfirm(true)
                    }} className="btn-danger"><DeleteIcon /></IconButton>
                </StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <div className="fade-in table-modal">
          <ActionForm titles={tableTitles} handleClose={handleClose} id={idToShow.current} />
        </div>
      </Modal>
      <Modal open={deleteConfirm} onClose={() => {setDeleteConfirm(false)}}>
        <div className="delete-confirmation-container fade-in">
          Are you sure you want to delete?
          <div className="confirm-buttons">
            <Button variant="contained" className="btn-bg-danger" onClick={handleDelete}>Yes</Button>
            <Button variant="contained" className="btn-cancel" onClick={() => {setDeleteConfirm(false)}}>Cancel</Button>

          </div>
        </div>
      </Modal>
      </main>
    </div>
   

  );
}


CustomizedTables.propTypes = {
  tableBody: PropTypes.array.isRequired,
  tableTitles: PropTypes.array.isRequired
}