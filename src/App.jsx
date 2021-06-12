import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import Categoria from './paginas/Categorias'

//comando pra iniciar o servidor da api: npx json-server --watch db.json --port 5000


function App() {

  return (
    <>
      <Router>
        <Cabecalho />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sobre'>
            <Sobre />
          </Route>
          <Route path='/categoria/:id'>
            <Categoria />
          </Route>
          <Route path='/posts/:id'>
            <Post />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
