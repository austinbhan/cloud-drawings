import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutMe from './About-Me';
import ListPage from './List-Page';
import DetailPage from './Detail-Page';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>Title Goes Here</h1>
          
          <Link to="/about-me">About Me</Link>
        </div>

        <div className="body">
          <h3>Body Contents Go Here</h3>
          <Switch>
            <Route exact path="/">
              <ListPage />
            </Route>
            <Route exact path="/about-me">
              <AboutMe />
            </Route>
            <Route exact path="/pictures/:id">
              <DetailPage />
            </Route>
          </Switch>
        </div>

        <div className="footer">
          <h3>Footer Goes here</h3>
        </div>
      </div>
    </Router>
  );
  
}

export default App;
