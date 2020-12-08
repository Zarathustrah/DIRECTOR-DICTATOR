import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import UI from './components/UI'
import ProblemPage from './components/ProblemPage'
import Congrats from './components/Congrats'


const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/UI" component={UI} />
      <Route path="/problempage" component={ProblemPage} />
      <Route path="/congrats" component={Congrats} />
    </Switch>
  </BrowserRouter>

)




export default App

