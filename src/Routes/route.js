
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { toast, Zoom } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth';

export default function RouteWrapper({
    component: Component,
    masterUSer,
    isPrivate,
    ...rest
}) {

   const {signed,loading} =useContext(AuthContext);

    if (loading) {
        return (
            <div>

            </div>
        )
    }

    if (!signed && isPrivate) {
        toast.info('Para prosseguir por favor faça o login ou o cadastro! 😉',
            {
                position: "top-center",
                
                transition: Zoom
            })

            
        return <Redirect to='/login' />

    }
    // if (signed && !isPrivate ) {
        
    //     return <Redirect to='/detalhes/:id' />

    // }

    

    return (
        <Route
            {...rest}
            render={props => (
                <Component {...props} />
            )} />
    )
}
