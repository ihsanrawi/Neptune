import React from 'react';
import { Route, Switch } from "react-router-dom";

import Landing from './pages/Landing'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path = "/" component = { Landing } />
        <Route component = { NotFoundPage } />
      </Switch>
    </div>
  )
}


export default App;
