import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video'
if (process.env.NODE_ENV === 'development') {

  const { worker } = require('../../mocks/browser')

  worker.start()

}


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/video">
          <VideoPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
