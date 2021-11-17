import { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Orders from './pages/Orders/Orders.jsx'
import Clients from './pages/Clients/clients.jsx'
import ClientsInner from './pages/ClientsInner/clientsinner.jsx'
import Products from './pages/Products/products.jsx'
import Suggest from './pages/Suggestions/Suggest.jsx'
import Settings from './pages/Settings/settings.jsx'
import Login from './pages/Login/login.jsx'
import Header from './containers/Header/header.jsx'
import Sidebar from './containers/Sidebar/Saidbar'
import ClientsMore from './pages/ClientsMore/clientsmore.jsx'
import CategoryInner from './pages/CategoryInner/categoryinner.jsx'
import Categories from './pages/Categories/categories.jsx'
import CategoryProducts from './pages/CategoryProducts/categoryproducts.jsx'
import CategoryProduct from './pages/CategoryProduct/categoryproduct.jsx'

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
            <Route path="/clientsinner">
              <ClientsInner/>
            </Route>
            <Route path="/clientsmore">
              <ClientsMore/>
            </Route>
            <Route path="/categoryinner">
              <CategoryInner/>
            </Route>
            <Route path="/categories">
              <Categories/>
            </Route>
            <Route path="/categoryproducts">
              <CategoryProducts/>
            </Route>
            <Route path="/categoryproduct">
              <CategoryProduct/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
  }
}

export default App