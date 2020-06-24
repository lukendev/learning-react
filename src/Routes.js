import React from 'react';

import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import Contato from './pages/contato'
import CadastroItem from './pages/itens/cadastro'
import ListaItem from './pages/itens/lista'

function Routes() {
  return (<BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contato" component={Contato} />
                    <Route path="/itens/cadastro" component={CadastroItem} />
                    <Route path="/itens" component={ListaItem} />
                </Switch>
            </BrowserRouter>);
}

export default Routes;