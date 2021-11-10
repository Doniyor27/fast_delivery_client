import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Path, Router } from 'react-router-dom';
import App from './App'
import Login from './Login'

ReactDOM.render(
  <React.StrictMode>
    {
      (document.cookie) 
      ? <App />
      : <Login />
    }
  </React.StrictMode>,
  document.getElementById('root')
)
