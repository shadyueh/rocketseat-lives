import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg'
import dislike from '../assets/dislike.svg'
import like from '../assets/like.svg'



export default function Main({ match }){
    return(
        <div className="main-container">
            <img src={logo} alt="TinDev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="avatar" />
                    <footer>
                        <strong>User Test</strong>
                        <p>Programador e cantor sertanejo nas horas vagas</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
            </ul>
    </div>
    )
}