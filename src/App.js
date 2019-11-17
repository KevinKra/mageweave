import React from 'react';
import UserProfile from './pages/UserProfile/UserProfile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CoursePage from './pages/CoursePage/CoursePage';
import './App.css';

function App() {
  const ruby = {
    mainTitle: "The Complete Ruby Course",
    chapters: [
      {
        chapterTitle: "Ruby Fundamentals", 
        sections: [
          [ 
            { id: 1, type: "lesson", name: "Intro to Ruby", progress: "3/3", complete: true, points: 100, link: "/intro-to-ruby" }
          ],
          [ 
            { id: 4, type: "practice", name: "Ruby Methods I Practice", progress: "", complete: false, points: 200, family: "1", link: "/ruby-methods-1-practice"},
            { id: 3, type: "lesson", name: "Ruby Methods I", progress: "2/4", complete: false, points: 100, family: "1", link: "/ruby-methods-1"}, 
            { id: 2, type: "lesson", name: "Ruby Classes I", progress: "3/3", complete: true, points: 100, link: "/ruby-classes-1" }
          ],
          [ 
            { id: 5, type: "lesson", name: "The Weird Parts of Ruby", progress: "0/3", complete: true, points: 100, link: "/the-weird-parts-of-ruby"}
          ],
          [ 
            { id: 9, type: "practice", name: "Ruby Methods II/III Practice", progress: "", complete: false, family: "1", points: 200, link: "/ruby-methods-2-3-practice"},
            { id: 8, type: "lesson", name: "Ruby Methods III", progress: "0/2", complete: false, points: 100, family: "1", link: "/ruby-methods-3"}, 
            { id: 7, type: "lesson", name: "Ruby Methods II", progress: "0/5", complete: false, points: 100, family: "1", link: "/ruby-methods-2"}, 
            { id: 6, type: "lesson", name: "Ruby Classes II", progress: "0/3", complete: false, points: 100, link: "/ruby-classes-2"}
          ],
          [ 
            { id: 10, type: "test", name: "Ruby Fundamentals Test", progress: "0/1", complete: false, points: 500, link: "/ruby-fundamentals-test"} 
          ]
        ]
      },
      {
        chapterTitle: "Intermediate Ruby", 
        sections: [
          [ 
            { id: 11, type: "lesson", name: "Ruby Expanded", progress: "0/3", complete: true, points: 100, link: "/intro-to-ruby" },
            { id: 12, type: "lesson", name: "Ruby Testing I", progress: "0/2", complete: true, points: 100, link: "/ruby-testing-1" }
          ],
          [ 
            { id: 13, type: "practice", name: "Ruby Classes III Practice", progress: "", complete: false, points: 200, family: "1", link: "/ruby-classes-3-practice"},
            { id: 14, type: "lesson", name: "Ruby Classes III", progress: "0/4", complete: false, points: 100, family: "1", link: "/ruby-classes-3"},      
            { id: 15, type: "lesson", name: "Versions of Ruby", progress: "0/1", complete: true, points: 100, link: "/the-weird-parts-of-ruby"},
          ],
          [ 
            { id: 16, type: "practice", name: "Ruby Methods IV Practice", progress: "", complete: false, family: "1", points: 200, link: "/ruby-methods-4-practice"},
            { id: 17, type: "lesson", name: "Ruby Methods IV", progress: "0/2", complete: false, points: 100, family: "1", link: "/ruby-methods-4"},
            { id: 18, type: "practice", name: "Ruby Classes IV Practice", progress: "", complete: false, points: 200, family: "1", link: "/ruby-classes-4-practice"}, 
            { id: 19, type: "lesson", name: "Ruby Classes IV", progress: "0/3", complete: false, points: 100, link: "/ruby-classes-4"}
          ],
          [ 
            { id: 20, type: "test", name: "Intermediate Ruby Test", progress: "0/1", complete: false, points: 500, link: "/ruby-fundamentals-test"} 
          ]
        ]
      }
    ]
  }
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
        <Route exact path="/courses">
          {/* <CoursePage /> */}
        </Route>
        <Route exact path="/courses/ruby">
          <CoursePage course={ruby}/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
