import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Protected from '../Protected'
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video'
import VideoPlayer from '../VideoPlayer';
import NotFound from '../../pages/NotFound';
import LoginPage from '../../pages/Login';
import FavouritePage from '../../pages/Favourite';
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
            <HomePage className="dark:bg-gray-900"/>
          </Route>
          <Route exact path="/video/:videoId" component={VideoPlayer}>
            <VideoPage/>
          </Route>
          <Protected path="/favourites" component={FavouritePage}/>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route path="*"> 
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
