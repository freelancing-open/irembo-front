
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {FormLabel, FormControl} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { loginAction } from '../actions/authActions';
import {AUTH_FAILURE} from '../actions/types';


function LoginForm(props) {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate("/login");
    }

    const [info, setInfo] = useState({
        email: '',
        pwd: ''
    })

    function submitData(e) {
        e.preventDefault();
        console.log(info);
        props.loginAction('', info);
        e.target.reset();
        navigate("/");
    }
    function inputChange(e) {
        setInfo({ ...info, [e.target.name]: e.target.value })
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
                <Grid container direction="column" justify="center" alignItems="center" sx={{marginTop: 10}}>
                    <Avatar sx={{margin: 1, backgroundColor: '#f44336'}}>
                        <LockOutlinedIcon />
                    </Avatar>               
                    <Typography component="h1" variant="h5" sx={{textAlign: 'center'}}>
                        Sign in User Management
                    </Typography>
                    <FormControl component="fieldset" error={props.error?.type === AUTH_FAILURE ? true : false}>
                        <form sx={{width: '100%', marginTop: 1}} onSubmit={submitData} noValidate>
                        <FormLabel sx={{textAlign: 'center'}}>{props.error?.type === AUTH_FAILURE ? props.error.message : ''}</FormLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={info.email} 
                                onChange={inputChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                value={info.pwd}
                                fullWidth
                                name="pwd"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={inputChange}
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{marginBottom: 3, marginTop: 2}}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/forgot">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signup">
                                        Don't have an account? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </FormControl>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}
const mapStateToProps = (state) => ({
    error: state.auth.error
})
export default connect(mapStateToProps, { loginAction })(LoginForm);