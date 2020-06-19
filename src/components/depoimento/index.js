import React from 'react';
import './style.css';

export default function Depoimento(props){
    return (
        <div className="card ml-5 p-4">
        <h2>{props.nome}</h2>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
        </div>
    )
}