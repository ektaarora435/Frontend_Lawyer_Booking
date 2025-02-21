import React from 'react';
import './style.css';
import { Avatar, Container, Paper, TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";

const LoginPage = () => {
   return (
      <Container maxWidth="xs">
         <Paper elevation={10} sx={{ marginTop: 10, padding: 3 }}>
            <Avatar
               sx={{
                  mx: "auto",
                  bgcolor: "secondary.main",
                  textAlign: "center",
                  mb: 1
               }}>
               <LockOutlinedIcon />
            </Avatar>
            <h1>Login Page</h1>
            <TextField label="Username" variant="outlined" sx={{ width: 350 }} /><br /><br />
            <TextField label="Password" variant="outlined" type="password" sx={{ width: 350 }} /><br /><br />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" /><br /><br />
            <Button variant="contained" type='submit' sx={{ width: 350 }}>SUBMIT</Button><br />
            <div className='login-footer'>
               <p>Forgotten password?</p>
               <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
         </Paper>
      </Container>
   );
};

export default LoginPage;
