import React from 'react';
import UserProfile from './pages/UserProfile/UserProfile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/catalog">
          <CatalogPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
