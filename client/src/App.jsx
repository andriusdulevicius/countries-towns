import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddNewPlace from './components/AddNewPlace';
import AllPlaces from './components/AllPlaces';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <AllPlaces />
            </Route>
            <Route path='/createNewPlace'>
              <AddNewPlace />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
