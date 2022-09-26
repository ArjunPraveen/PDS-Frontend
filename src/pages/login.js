import React from 'react'
import { Paper, TextField } from '@mui/material'
import {Button} from '@mui/material'
import {Typography, Grid} from '@mui/material'
import { useNavigate, useHistory } from 'react-router-dom';


export default function Register() {
    // const history = useHistory()
    const handleLogin = () => {
        window.location = "/";
    }
  return (
   <React.Fragment>

   <br/>
   <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
    >

    <Typography variant="h5" justifyContent="center">Hospital Login</Typography>
    <br />
    <form>
    <TextField
          style={{ width: "300px", margin: "5px" }}
          type="text"
          label="Usermane"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          style={{ width: "300px", margin: "5px" }}
          type="password"
          label="Password"
          variant="outlined"
        />
       
        <br />
        <br/>
        
        <Button variant="contained" color="primary" style={{margin: "5px"}} onClick={handleLogin}>
          Login
        </Button>


    </form>
    </Grid>
      
   </React.Fragment>
    
  )
}