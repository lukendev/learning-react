import React from 'react';
import './style.css';


import imgLogo from '../../assets/img/logo192.png'

export default function Footer(){
    return (
        <footer className="d-flex justify-content-around align-itens-center bg-dark text-white">
        <a href="#"><img src={imgLogo} alt=""></img></a>
            <p className="align-middle">Copyright</p>
        </footer>
    )
};