import React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ConsultationCard from '../components/consultationCard';
import axios from 'axios';
import { rootShouldForwardProp } from '@mui/material/styles/styled';


//import  {Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator,TimelineConnector} from '@mui/lab';


//import Item from "@mui/material/It"

const columns = [
    {id: 'pui', label: 'PUI', minWidth:70},
  { id: 'name', label: 'Name', minWidth: 170 },
 
  {
    id: 'gender',
    label: 'Gender  ',
    minWidth: 50,
    
  },
  
  { id: 'nationality', label: 'Nationality', minWidth: 100 },
  { id: 'dob', label: 'DOB', minWidth: 120 },
 
  { id: 'email', label: 'Email', minWidth: 170 },
  {
    id: 'date',
    label: 'Date Registered',
    minWidth: 170,
    
  },
  {
    id: 'lastDoctor',
    label: 'Last Doctor',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];




export default function PatientInfo() {
    const [PUI, setPUI] = React.useState(0);
    const [patientDetails, setPatientDetails] = React.useState({
        pui : "",
        firstName : "",
        middleName: "",
        lastName: "", 
        contact: "", 
        gender: "", 
        nationality: "", 
        dob: "",
        email: "",
        dateRegistered: ""
    })
    const [consultationDetails, setConsultationDetails] = React.useState()

    const getPatientData = async () => {
        if(PUI == 0 ){
            alert("Enter valid PUI");
            return;
        }
        try{
            const res = await axios.get(
                `https://localhost:7275/patient/${PUI}/consultation`,
                {headers: {
                    'Access-Control-Allow-Origin': true,
                }}
            )
            //console.log(res) 
            //alert(`Fetching ${res.data.patientData.firstName} details`)
            //deconstruct!
            setPatientDetails({
                pui : res.data.patientData.pui,
                firstName : res.data.patientData.firstName,
                middleName: res.data.patientData.middleName,
                lastName: res.data.patientData.lastName, 
                contact: res.data.patientData.contactNumber, 
                gender: res.data.patientData.gender, 
                nationality: res.data.patientData.nationality, 
                dob: res.data.patientData.dob,
                email: res.data.patientData.email,
                dateRegistered: res.data.patientData.createdTime ? new Date(res.data.patientData.createdTime).toDateString(): "Not found"
            })
            console.log(patientDetails)
            const consultationArray = res.data.consultations
            console.log(consultationArray)
            /*
            new onject = {
                "OPD" : [
                    {},{}
                ],
                "Vaccination": [
                    {}, {}
                ]
            }
            this.setState({cart: [...this.state.cart, this.state.input]});
            */
           var temp = {}
           
            for(var i in consultationArray){
                var ctype = consultationArray[i].consultationType
                console.log(temp)
                if(temp.hasOwnProperty(ctype)){
                    temp[ctype].push(consultationArray[i])
                }else{
                    temp[ctype]=[]; 
                    temp[ctype].push(consultationArray[i])
                }
                
                //temp.hasOwnProperty(ctype) ?() => { temp[ctype]=[]; temp[ctype].push(consultationArray[i])}: temp[ctype] = consultationArray[i]
            }
            console.log(temp)
            // React.useEffect(()=> {
                
            // },[consultationDetails])
        
            setConsultationDetails(temp)
            //console.log(consultationDetails)
        } catch(err){
            console.log(err)
            alert("Internal Server error")
        }
        
        
        
    }
    return (
        

    <>
        <Box m={2} pt={7}>
            <Grid container spacing={12}>
                
                <Grid item xs={8}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Enter PUI"
                        defaultValue=""
                        onChange={(e) => setPUI(e.target.value)}
                    />  
                </Grid>
                <Grid item xs={4}>
                <Button variant="contained" color="primary" style={{margin: "5px"}} onClick={getPatientData}>
                    Search
                </Button>
                </Grid>
            </Grid>

            
        </Box>
        <br/>
        <br/>
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
              <TableCell component="th" scope="row">
                {patientDetails.pui}
              </TableCell>
              <TableCell align="left">{patientDetails.firstName} {patientDetails.middleName} {patientDetails.lastName}</TableCell>
              <TableCell align="left">{patientDetails.gender}</TableCell>
              <TableCell align="left">{patientDetails.nationality}</TableCell>
              <TableCell align="left">{patientDetails.dob}</TableCell>
              <TableCell align="left">{patientDetails.email}</TableCell>
              <TableCell align="left">{patientDetails.dateRegistered}</TableCell>
              <TableCell align="left">{patientDetails.email}</TableCell>
            </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        </Paper>
        <br></br>
        <Grid container spacing={3}>
            {consultationDetails &&  Object.keys(consultationDetails).map((c) => {
                
                
                return(<Grid item xs={4}>
                    <ConsultationCard props={consultationDetails[c]}/>
                </Grid> )
                {console.log(consultationDetails[c])}
                
            }) }
            {/* <Grid item xs={4}>
                <ConsultationCard/>
            </Grid> 
            <Grid item xs={4}>
                <ConsultationCard/>
            </Grid> 
            <Grid item xs={4}>
                <ConsultationCard/>
            </Grid> 
            <Grid item xs={4}>
                <ConsultationCard/>
            </Grid>  */}
        </Grid>
        
        
        </>

        
            
    )
}

