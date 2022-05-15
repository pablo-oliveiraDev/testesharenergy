import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth';
import './SignUp.css'
import Logo from '../../assets/logo.png'



export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [CPF, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const {signUp ,loadingAuth}= useContext(AuthContext)
  

  function handleSubmit(e) {
    e.preventDefault();
    if (nome !== '' && email !== '' && senha!== '') {
      signUp(nome, email, telefone, CPF, senha)
    }
    

  }

  return (
    <div className="container-center" id='signUp'>
    <div className="login">
      <div className="login-area">
        <img src={Logo} alt="Sistema Logo" />
      </div>

      <form onSubmit={handleSubmit}>
            <label>Nome Completo :</label>
            <input type='text' placeholder='Seu nome completo' value={nome} onChange={(e) => setNome(e.target.value)} required/>
            <label>Email :</label>
            <input type='text' placeholder='seu email@***.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <label>Telefone :</label>
            <input type='text' placeholder='Seu Telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>
            <label>CPF/CNPJ :</label>
            <input type='text' placeholder='seu Cpf / Cnpj' value={CPF} onChange={(e) => setCPF(e.target.value)} required/>
            <label>Senha :</label>
            <input type='password' placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)} required/>
            <button type='Submit'>{loadingAuth ? "Salvando..." : "Salvar"}</button>
          </form>
          <Link to="/login">Já tem uma conta</Link>
        </div>
  </div>
  );
}  
    