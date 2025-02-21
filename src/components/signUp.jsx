import React from 'react';
import './style.css';
import { Avatar, Container, Paper, TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from "react-router-dom";

const SignUpPage = () => {
   return (
      <Container maxWidth="sm">
         <Paper elevation={10} sx={{ marginTop: 4, padding: 3 }}>
            <Avatar
               sx={{
                  mx: "auto",
                  bgcolor: "primary.main",
                  textAlign: "center",
                  mb: 1
               }}>
               <PersonAddIcon />
            </Avatar>
            <h1>Sign Up Page</h1>
            <TextField id="fullname" label="Full Name" variant="outlined" sx={{ width: 500 }} /><br /><br />
            <TextField id="email" label="Email" variant="outlined" type="email" sx={{ width: 500 }} /><br /><br />
            <TextField id="username" label="Username" variant="outlined" sx={{ width: 500 }} /><br /><br />
            <TextField id="password" label="Password" variant="outlined" type="password" sx={{ width: 500 }} /><br /><br />
            <FormControlLabel control={<Checkbox />} label="I agree to the Terms and Conditions" /><br /><br />
            <Button variant="contained" type='submit' sx={{ width: 500 }}>SIGN UP</Button><br />
            <div className='signup-footer'>
               <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
         </Paper>
      </Container>
   );
};

export default SignUpPage;
