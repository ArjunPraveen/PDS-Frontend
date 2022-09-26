import React from 'react'
import { Paper, TextField } from '@mui/material'
import {Button} from '@mui/material'
import {Typography} from '@mui/material'

export default function Register() {
  return (
   <React.Fragment>
   <br/>
   <br/>
   <br/>
    <Typography variant="h5">Register patient/Create Relation</Typography>
    <br />
    <form>
    <TextField
          style={{ width: "300px", margin: "5px" }}
          type="text"
          label="Full Name"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          style={{ width: "300px", margin: "5px" }}
          type="text"
          label="Aadhar Number"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          style={{ width: "300px", margin: "5px" }}
          type="text"
          label="Mobile Number"
          variant="outlined"
        />
        <br />
        <br/>
        <Button variant="contained" color="primary" style={{margin: "5px"}}>
          Request OTP
        </Button>

        <br />
        <br/>
        <TextField
          style={{ width: "300px", margin: "5px" }}
          type="text"
          label="OTP"
          variant="outlined"
        />
        <br />
        <br/>
        <Button variant="contained" color="primary" style={{margin: "5px"}}>
          Register
        </Button>


    </form>
      
   </React.Fragment>
    
  )
}