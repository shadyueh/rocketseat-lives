import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg'

export default function Login(){
    return (
        <div className="login-container">
            <form action="">
                <img src={logo} alt="TinDev" />
                <input type="text" placeholder="Informe seu usuário no GitHub"/>
                <button type="submit">Enviar</button>
            </form>
        </div> 
    );
}