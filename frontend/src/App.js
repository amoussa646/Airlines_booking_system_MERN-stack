import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import './App.css';

import CreateFlight from './components/CreateFlight';
import ShowFlightList from './components/ShowFlightList';
import ShowFlightDetails from './components/ShowFlightDetails';
import UpdateFlightInfo from './components/UpdateFlightInfo';
import home  from './components/home';
import search  from './components/search';
import search_results  from './components/search_results';
class App extends Component {
  render() {
    return (
      
      <Router>
         
       <div>
       <Route exact path='/' component={home} ></Route>
        <Route exact path='/AdminPortal' component={ShowFlightList} ></Route>
        <Route path='/AdminPortal/create-flight' component={CreateFlight}></Route>
        <Route path='/AdminPortal/edit-flight/:id' component={UpdateFlightInfo}></Route>
        <Route path='/AdminPortal/delete-flight/:id' component={ShowFlightDetails}></Route>
        <Route path='/AdminPortal/search' component={search}></Route>
        <Route path='/AdminPortal/search_results' component= {search_results}></Route>
       </div>
       
      </Router>
      
    );
  }
}

export default App;