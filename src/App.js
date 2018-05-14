import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route //,Link
} from 'react-router-dom';

//components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import WeatherApp from './components/pages/weatherapp';




class App extends Component {
  //this will be bound to 'app'
  render() {
    return (
      <Router>
        <div className="App">
        <Header />   
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Products' component={WeatherApp} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;



 

