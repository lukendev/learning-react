import React from 'react'
import './style.css'

export default function Botao(props){
    return(
        <button className={props.tipo}>{props.texto}</button>
    ) 
}