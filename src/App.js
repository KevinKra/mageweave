import React from 'react';
import UserProfile from './pages/UserProfile/UserProfile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
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
