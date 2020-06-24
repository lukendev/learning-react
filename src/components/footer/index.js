import React from 'react';
import './style.css';


import imgLogo from '../../assets/img/logo192.png'

export default function Footer(){
    return (
        <footer className="d-flex justify-content-around align-items-center bg-dark text-white">
        <a href="#"><img src={imgLogo} alt=""></img></a>
            <div className="align-middle cop">Copyright</div>
        </footer>
    )
};