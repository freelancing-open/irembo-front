import './App.css';
import React from 'react';
import LoginForm from './pages/LoginForm';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import {connect} from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";

function App(props) {
  return (
    <div className="App"> 
        <Routes>
          <Route path="/" element={ props.authenticated ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />} />
          <Route path="/home" element={ props.authenticated ? <Home />  : <Navigate replace to="/login" />}  />
          <Route path="/login" element={ <LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          
        </Routes>        
    </div>
  );
}
const mapStateToProps = (state)=>({
  authenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(App);
