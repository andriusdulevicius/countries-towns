import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import AddNewPlace from './components/AddNewPlace';
import AllPlaces from './components/AllPlaces';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={AllPlaces}></Route>
            <Route path='/createNewPlace' component={AddNewPlace}></Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
