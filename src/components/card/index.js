import React from 'react';
import Botao from '../botao';
import Proptypes from 'prop-types'

export default function Card(props){
    return(
        <div className="card mb-5">
            <div className="card-body">
                <h1>{props.titulo}</h1>
                <p>{props.descricao}</p>
                <Botao texto="Eu quero" tipo="sucesso" />
            </div>
        </div>
    );
}

Card.propTypes = {
    titulo: Proptypes.string,
    descricao: Proptypes.string
}