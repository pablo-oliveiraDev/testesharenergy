import React, { useState } from 'react';
import './login.css';
import Logo from '../../assets/logo.png';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth';


export default function Login() {
  const [email,setEmail]=useState('');
  const [senha,setSenha]=useState('');
  const {signin,loadingAuth}=useContext(AuthContext);

  async function handleSubmit(e){
    e.preventDefault();
    if(email !==''&& senha !== ''){
      signin(email,senha)
    }
    

  }

  return (
    <div className='container-fluid' id='login'>
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={Logo} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder="*******" value={senha} onChange={(e) => setSenha(e.target.value) } />
          <button type="submit">{loadingAuth?'Carregando...':'Acessar'}</button>
        </form>  

        <Link to="/cadastrar">Criar uma conta</Link>
      </div>
    </div>
    </div>
  )
}

