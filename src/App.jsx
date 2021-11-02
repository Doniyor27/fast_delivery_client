import { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Orders from './pages/Orders/Orders.jsx'
import Clients from './pages/Clients/clients.js'
import Products from './pages/Products/products.jsx'
import Suggest from './pages/Suggestions/Suggest.jsx'
import Settings from './pages/Settings/settings.jsx'
import Login from './pages/Login/login.jsx'
import Header from './containers/Header/header.jsx'
import Sidebar from './containers/Sidebar/Saidbar'

import './assets/styles/main.css'

class App extends Component {

  constructor () {
    super();

    this.state = {
      activePage: ''
    }
  }

  render () {
    return (
    <Router>
      <Header/>
      <div className='container'>
      <Sidebar/>
        <div className='left-content'>
          <Switch>
            <Route path='/orders' >
              <Orders/>
            </Route>
            <Route path='/clients' >
              <Clients/>
            </Route>
            <Route path='/products' >
              <Products/>
            </Route>
            <Route path='/suggests' >
              <Suggest/>
            </Route>
            <Route path='/settings' >
              <Settings/>
            </Route>
            <Route path='/login' >
              <Login/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
  }
}

export default App