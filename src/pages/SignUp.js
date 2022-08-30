import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {FormLabel, FormControlLabel, Checkbox} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CameraIcon from '@mui/icons-material/CameraAlt';

export default function SignUp() {

    const [info, setInfo] = useState({
      firstName: '',
      lastName:'',
      email: '',
      pwd: '',
      cpwd: '',
      gender: '',
      dob: null,
      maritalStatus: '',
      nationality: '',
      profilePicture: null
  })
    function signup(e){
      e.preventDefault();
     // props.registerAction( info)
      e.target.reset();
    }

    function inputChange(e){
      setInfo({ ...info, [e.target.name]: e.target.value});
    }

    function handleDateChange(data){
        setInfo({...info, 'dob': data})
    }

    const uploadProfileImage = (e) => {
        let fd = new FormData();
        fd.append("profilePicture", e.target.files[0]);
       /* props.updatePicture({
            matricule: props.user.matricule,
            body: fd
        })*/
    }
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate("/");
    }

    return (
        <div>
            <Container component="main" maxWidth="xs" sx={{overflowX: 'hidden', overflowY: 'hidden'}}>
                <CssBaseline />
                <AppBar position="fixed" color="default" sx={{borderBottom: "1px solid #00d8ff"}}>
                    <Toolbar>
                        <Grid container direction="row" justify="center" alignItems="center" >
                            <Grid item xs sm md lg>
                                <Typography component="h3" variant="h5" sx={{fontWeight: 'bold'}}> iRembo </Typography>
                            </Grid>  
                            <Grid item xs sm md lg sx={{textAlign: 'right'}}>
                                <Button onClick={routeChange} sx={{fontSize: 16}}>
                                    Login
                                </Button>
                            </Grid>  
                        </Grid>       
                    </Toolbar>
                </AppBar>
                <Box sx={{marginTop: 10, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Avatar sx={{margin: 1, backgroundColor: '#f44336'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 2}}>
                        Sign Up to User Management
                    </Typography>
                    <form onSubmit={signup} noValidate>
                        <Grid container  spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    value={info.firstName} 
                                    onChange={inputChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={info.lastName} 
                                    onChange={inputChange}
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={info.email} 
                                    onChange={inputChange}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="pwd"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={info.pwd} 
                                    onChange={inputChange}
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="cpwd"
                                    label="Confirm Password"
                                    type="password"
                                    id="password"
                                    value={info.cpwd} 
                                    onChange={inputChange}
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="age"
                                            value={info.age}
                                            label="Gender"
                                            onChange={inputChange}>

                                            <MenuItem value="M">Male</MenuItem>
                                            <MenuItem value="F">Female</MenuItem>
                                            <MenuItem value="O">Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="maritalStatus"
                                            value={info.maritalStatus}
                                            label="Marital Status"
                                            onChange={inputChange}>

                                            <MenuItem value="Single">Single</MenuItem>
                                            <MenuItem value="Married">Married</MenuItem>
                                            <MenuItem value="Divorced">Divorced</MenuItem>
                                            <MenuItem value="Widowed">Widowed</MenuItem>
                                        </Select>
                                </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="nationality"
                                    label="Nationality"
                                    name="nationality"
                                    value={info.nationality} 
                                    onChange={inputChange}
                                    autoComplete="nationality"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        label="Date of Birth"
                                        inputFormat="MM/DD/YYYY"
                                        name="dob"
                                        value={info.dob}
                                        onChange={(newValue) => {
                                            handleDateChange(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                        />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    startIcon={<CameraIcon />}
                                    component="label"
                                    variant="contained"
                                    color="primary"
                                    sx={{marginTop: 0, padding: 1.5}}>
                                    Upload Picture
                                    <input
                                        onChange={uploadProfileImage}
                                        type="file"
                                        accept="image/*"
                                        hidden
                                    />
                                </Button>
                                    </Grid>
                           
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{marginBottom: 3, marginTop: 2}}>
                            Sign Up
                        </Button>
                        <Typography align='center'>
                            <Link to="/" color='inherit' underline='none'>
                                Already have an account? Sign in
                            </Link>
                        </Typography>
                    </form>
                </Box>
            </Container>
            <Footer />
        </div>
    );
  }