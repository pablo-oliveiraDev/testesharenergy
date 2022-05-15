import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Contexts/Auth';
import Header from './Components/Header';
import firebase from './Services/Firebase/firebaseConnection';


function App() {
  return (



    <AuthProvider>
      <BrowserRouter>
        <Header />
        <ToastContainer autoclose={3000} theme='colored' />
        <Router />

      </BrowserRouter>
    </AuthProvider>










  );
}

export default App;
