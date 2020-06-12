import React from 'react';
import './style.css';

export default function Header(){
    const listaDeLinks = ["home", "contato", "Doações"]
    return (
        <header>
            <h1>logo</h1>
            <ul>
                {listaDeLinks.map(link => {
                    return <li>{link}</li>;
                })}
            </ul>
        </header>
    )
};