import React, { useState } from 'react';

import camera from "../../assets/camera.svg"

import './styles.css';

export default function New() {

    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');


    function handleSubmit() {
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail">
                <input type="file" name="" id=""/>
                <img src={camera} alt="Select img"/>
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input 
                type="text"
                id='company'
                placeholder='Sua empresa incrível'
                value={company}
                onChange={ event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">CATEGORIAS * <span>(separadas por vírgula)</span></label>
            <input 
                type="text"
                id='techs'
                placeholder='Quais tecnologias usam'
                value={techs}
                onChange={ event => setTechs(event.target.value)}
            />
            
            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
            <input 
                type="text"
                id='price'
                placeholder='Valor cobrado por dia'
                value={price}
                onChange={ event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}