import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    {id: 'uid', label: 'UID', minWidth:100},
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'age', label: 'Age', minWidth: 100 },
  {
    id: 'gender',
    label: 'Gender  ',
    minWidth: 170,
   
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date Registered',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'lastDoctor',
    label: 'Last Doctor',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(uid, name, age, gender, date, lastDoctor) {
 
  return { uid, name, age, gender, date, lastDoctor};
}

const rows = [
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt"),
  createData(1212311212, 'Arjun', 21, 'Male', "20/9/2022", "Dr FixIt")  
];

export default function PatientList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <br/>
        <br/>
        <br/>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
