import React, { Fragment } from 'react';

// Router
import { BrowserRouter, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer';
import AddMovieContainer from './containers/AddMovieContainer/AddMovieContainer';

function App() {
  return (

    <Fragment>
      <BrowserRouter>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/add" component={AddMovieContainer} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
