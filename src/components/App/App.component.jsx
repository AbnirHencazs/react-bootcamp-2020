import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video'
import VideoPlayer from '../VideoPlayer';
import GlobalProvider from '../../state/GlobalProvider'

if (process.env.NODE_ENV === 'development') {

  const { worker } = require('../../mocks/browser')

  worker.start()

}


function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/q/:searchQuery">
            <HomePage/>
          </Route>
          <Route exact path="/video/:videoId" component={VideoPlayer}>
            <VideoPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
