import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Search from './search/Search'
import MyDogs from './mydogs/MyDogs'
import Menu from './Menu'
import "../stylesheets/app.scss"

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/search' />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/mydogs'>
            <MyDogs />
          </Route>
        </Switch>
        <Menu />
      </Router>
    </div>
  )
}

export default App
