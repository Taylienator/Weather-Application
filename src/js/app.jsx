import React, { Component } from 'react';
import Search from './Components/Search';
import Information from './Components/Information';
import History from './Components/History';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron text-center'>
          <h1>
            Welcome to the Weather App!
          </h1>
            <p>Know when its the best time to go for a hike!</p>
        </div>
        
          <Search />
          <div className ='row'>
            <div className='col-md-6'>
              <Information />
            </div>
            <div className='col-md-6'> 
              <History />
            </div>
          </div>
      
        
        
      </div>
    );
  }
}
