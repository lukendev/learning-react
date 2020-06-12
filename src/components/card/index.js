import React from 'react';

export default function Card(){
    return(
        <div className="card">
            <div className="card-body">
                <h1>Doação de Alimentos</h1>
                <p>Estou doando pra ajudar quem precisa</p>
                <button className="btn btn-success">Eu quero!</button>
            </div>
        </div>
    );
}