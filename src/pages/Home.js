import React,  { Component }  from 'react';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { loadUserAction, logoutAction } from '../actions/authActions';
import Datatable from '../components/Datatable';

class Home extends Component {
   
    logout = () => {        
        this.props.logoutAction();
    }

    componentDidMount(){
        this.props.loadUserAction();
    }


    render() {
        return (
            <div>
                <AppBar position="fixed" color="default" sx={{borderBottom: "1px solid #00d8ff"}}>
                    <Toolbar>
                        <Grid container direction="row" justify="center" alignItems="center" >
                            <Grid item xs sm md lg>
                                <Typography component="h3" variant="h5" sx={{fontWeight: 'bold'}}> iRembo </Typography>
                            </Grid>  
                            <Grid item xs sm md={4} lg={4}>
                                <Grid item xs sm md lg sx={{textAlign: 'right'}}>
                                    <Typography component="h5" variant="h6">
                                        Welcome {this.props.user.firstName}
                                    </Typography>
                                </Grid>
                                <Grid item xs sm md lg sx={{textAlign: 'right'}}>
                                    <Button onClick={this.logout} sx={{fontSize: 16}}>
                                        Logout
                                    </Button>
                                </Grid>  
                            </Grid>
                        </Grid>       
                    </Toolbar>
                </AppBar>
                <Datatable />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
};
export default connect(mapStateToProps, {loadUserAction, logoutAction})(Home);