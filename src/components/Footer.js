import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Copyright(){
    
    return (
        <Box sx={{ p: 1}}>  
            <Typography variant="body1" component="h2" align="center" gutterBottom>
                Copyright
                {' '}
                {'©'}
                {' '}
                {new Date().getFullYear()}
                {' '}
                <Link color="inherit" href="/" underline='none'>
                    IZSoftwares
                </Link>
                {' '}
              All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default function Footer(){
    return (
        <Box sx={{ backgroundColor: '#1f1f1f', color: 'white', p: 1, position: 'fixed', bottom: 0, width: '100%'}}>  
            <div>
                <Box sx={{ overflowX: 'hidden', overflowY: 'hidden'}}>
                    <footer>
                        <Divider />    
                        <Grid container direction="row" justify="space-evenly">
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>  
                                <Typography variant="h5" align="center" gutterBottom>
                                    <strong>Contact Us</strong>
                                </Typography>    
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Box sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none'} }}>  
                                            <Link color="inherit" href="mailto: contact@jackb01.com" underline='none'>
                                                <Typography variant="subtitle1" align="center" gutterBottom>
                                                    {'contact@jackb01.com'}
                                                </Typography>  
                                            </Link>       
                                        </Box>                                                                        
                                    </Grid>
                                </Grid>                    
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>  
                                <Typography variant="h5" align="center" gutterBottom>
                                    <strong>Follow Us</strong>
                                </Typography> 
                                <Box sx={{ gap: 2 }}>       
                                    <Grid container direction="row" justifyContent="center" justify="center" alignItems="center">
                                        <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                            <Link href="https://github.com/Jackb01" underline="none" color="inherit">
                                                <Typography align="right" gutterBottom>
                                                    <GitHubIcon titleAccess="Github Account"/>     
                                                </Typography> 
                                            </Link>                       
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                            <Link  href="https://www.linkedin.com/in/beryl-joceran" underline="none" color="inherit">
                                                <Typography align="right" gutterBottom>
                                                    <LinkedInIcon titleAccess="Linkedin Account"/>                           
                                                </Typography>  
                                            </Link>
                                        </Grid>                                      
                                    </Grid>   
                                </Box>             
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>  
                                <Copyright />  
                            </Grid>
                        </Grid>                
                    </footer>
                </Box>
            </div>
        </Box>
    )
}