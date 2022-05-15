import React from 'react';
import {  Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Details from '../Pages/Details';
import Route from './route';
import Pesquisa from '../Pages/Pesquisa'





export default function Routes() {
  return (
      <Switch>
          <Route  exact path='/' component={Home}/>
          <Route  exact path='/login' component={Login}/>
          <Route  exact path='/cadastrar' component={SignUp}/>
          <Route exact  path='/detalhes/:id' component={Details} isPrivate/>
          <Route exact path='/pesquisar' component={Pesquisa} isPrivate />
      </Switch>
    
  )
}
