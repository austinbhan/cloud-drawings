import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutMe from './About-Me';
import ListPage from './List-Page';
import DetailPage from './Detail-Page';
import Suggestions from './Suggestions';


function App() {
  return (
    <Router>
      <head>
        <meta name="title" property="og:title" content="Doodling" />
        <meta name="image" property="og:image" content="./preview-image.jpg" />
        <meta name="author" content="Austin Han" />
      </head>
      <div className="App">
        <img className="title-image" src={require('./title.png').default} />
        <div className="header">
          <Link to="/about-me" className="link">About Me</Link>
          <Link to="/suggestions" className="link">Submit a Request</Link>
        </div>
        <div className="body">
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
            <Route exact path="/suggestions">
              <Suggestions />
            </Route>
          </Switch>
        </div>

        <div className="footer">
          <h3 id="footer-text">2022 by Austin Han</h3>
        </div>
      </div>
    </Router>
  );
  
}

export default App;
