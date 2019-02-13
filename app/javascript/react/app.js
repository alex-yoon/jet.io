import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import WelcomeContainer from "./containers/WelcomeContainer"
import GameContainer from "./containers/GameContainer"

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={WelcomeContainer} />
      <Route path='/game/:id' component={GameContainer} />
    </Router>
  )
}

export default App
