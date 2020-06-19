import React from 'react';
import './style.css';

import {Link} from 'react-router-dom'

import imgLogo from '../../assets/img/logo192.png'

export default function Header(props){
    const listaDeLinks = ["home", "contato", "Doações"]

    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <a className="navbar-brand" href="/"><img src={imgLogo} alt=""></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-5">
                    {listaDeLinks.map((link, index) => {
                        return (<li key={index} className="nav-item  ml-5"><a className="nav-link">{link}</a></li>
                        );
                    })}
                    <li className="nav-item">
                            <Link to="/contato">Página contato</Link>
                        </li>
                    
                </ul>
            </div>
        </nav>
        
            
        </header>
    )
};