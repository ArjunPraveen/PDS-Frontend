import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ConsultationModal from './consultationModal';
import Grid from '@mui/material/Grid'
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};


const handleModalOpen = () => {

}

//const [consultationDetails, setConsultationDetails] = React.useState()


export default function ConsultationCard(details) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns = [

    { id: 'nationality', label: 'Hospital Name', minWidth: 100 },
  { id: 'name', label: 'Complaint', minWidth: 170 },
 
  {
    id: 'gender',
    label: 'Doctor Name',
    minWidth: 100,
    
  },
  
  { id: 'nationality', label: 'Diagnosis', minWidth: 100 },
  { id: 'nationality', label: 'Remarks', minWidth: 100 },
  { id: 'reports', label: 'Reports', minWidth: 100 }
  
 
];

  const modalClick = () => {
    console.log("opening modal")
    setOpen(true)
    
  }
  return (
    <>
    <Box sx={{ maxWidth: 300}}>
      <Card variant="outlined">
      <CardContent>
      <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Badge color="secondary" badgeContent={details.props.length} >
        </Badge>
      </Box>
    {console.log(details)}
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Type
      </Typography>
      <Typography variant="h5" component="div">
        {details.props[0].consultationType}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2" onClick={handleModalOpen}>
        Click View more to view all reports
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={modalClick}>View More</Button>
    </CardActions>

      </Card>
      
    </Box>
    <div>
   
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      Reports
      <br></br>
        {details.props.map((e,i) => {
          return(
            <>
            <Paper variant="outlined" >
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow
              key="row"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
           
              
              <TableCell align="left">{e["hospitalName"]}</TableCell>
              <TableCell align="left">{e["chiefComplaints"]}</TableCell>
              <TableCell align="left">{e["doctorName"]}</TableCell>
              <TableCell align="left">{e["diagnosis"]}</TableCell>
              <TableCell align="left">{e["remark"]}</TableCell>
              <TableCell align="left">
                <a href={e["reports"][0]}>{e["reports"][0]} </a>
                </TableCell>
              
              
            </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        </Paper>
          
          
          <br></br>
          </>
          )
        })}
      
      </Box>
    </Modal>
  </div>
    </>
  );
}
