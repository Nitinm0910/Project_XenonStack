import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
export default function User() {

  
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
      <div className='user-registration-form' style={{display:'inline-block', width:'30%', margin:'2%'}}>
       <h3>Login Page</h3>
        <TextField
          
          id="outlined-error-helper-text"
          label="Username"
          defaultValue=""
    
        />
        <TextField
          
          id="outlined-error-helper-text"
          label="Password"
          defaultValue=""
        
        />
        <TextField
          
          id="outlined-error-helper-text"
          label="First Name"
          defaultValue=""
          
        />
        <TextField
          
          id="outlined-error-helper-text"
          label="Last Name"
          defaultValue=""
         
        />
        <TextField
          
          id="outlined-error-helper-text"
          label="Address"
          defaultValue=""
          
        />
        <DatePicker />
        
        <br></br>
        
        <Button variant="contained">Submit</Button>

      </div>
      
      
    </Box>
  );
}