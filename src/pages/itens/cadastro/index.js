import React, {useState} from 'react';
import Header from '../../../components/header'
import {ToastContainer, toast} from 'react-toastify'
// import { Container } from './styles';

    function Cadastro() {

    const [ nomeItem , setNomeItem] = useState('')
    const [ descricaoItem , setDescricaoItem] = useState('')

    async function finalizarCadastro(event){
        event.preventDefault()
        const dados = {
            nome: nomeItem,
            descricao: descricaoItem,
        };

        const resposta = await fetch('http://localhost:4000/itens', {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(dados),
        })

        if(resposta.status === 201){
            toast.success('Iten cadastrado com sucesso!', {
                position:'bottom-right'
            })
            setNomeItem('');
            setDescricaoItem('');
        }
    }

    function mudarValor(event){
        setDescricaoItem(event.target.value)
    }

  return (
      <>
        <Header />
            <ToastContainer />
            <main className="container">
                <h1>Cadastro de itens para doação!</h1>

                <form onSubmit={finalizarCadastro} className="card p-3 w50">
                    <div className="form-group">
                        <label>Nome do item</label>
                        <input type="text" value={nomeItem} onChange={(event) => setNomeItem(event.target.value)} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Desrição do item</label>
                        <input type="text" value={descricaoItem} onChange={mudarValor} className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-success">Finalizar Cadastro</button>
                </form>

            </main>
        </>
  )
}

export default Cadastro;