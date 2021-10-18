import React from 'react';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Akshat from './components/Navbar';
import Sliders from './components/Carousel';
import Search from './components/Search';
import BookStore from './components/BookStore';
function App() {
  return (
    <>
      <Router>
        <Akshat/>
        <Switch>
          <Route path='/' exact />
        </Switch>
        <Search/>
        
        <BookStore/>
        <Sliders/>
      </Router> 
    </>

  );
}

export default App;
