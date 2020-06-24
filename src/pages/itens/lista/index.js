import React, { useEffect, useState } from 'react';
import Header from '../../../components/header'
import { Link } from 'react-router-dom'

// import { Container } from './styles';

function Lista() {

    //quando for renderizado
    const [itens, setItens] = useState([])

    useEffect(() => {
        async function getItens() {
            const resposta = await fetch('http://localhost:4000/itens')
            const body = await resposta.json()

            setItens(body)
        }  

        getItens()

        
    }, [])

    useEffect(() => {
        return () => {
            alert('Estou sendo destruido!')
        }
    }, [])

    return (
    <>
        <Header />
        <main>
            <h1>Listar itens</h1>
            <Link to='/'>Voltar para home</Link>
            <ul className='list-group'>
                {
                    itens.map( (item, index) => {
                        return <li key={indexedDB}className="list-group-item">{item.nome}</li>
                    })
                }
            </ul>
        </main>
    </>
    )
}

export default Lista;