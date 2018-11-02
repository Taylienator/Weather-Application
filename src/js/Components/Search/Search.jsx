import React from 'react';
import { updateSearchAction, sendingSearchAction } from './searchActions';

export default class Search extends React.Component {
  constructor(props){
    super(props);

  this.handleSearchInput = this.handleSearchInput.bind(this);
  this.onButtonSearch = this.onButtonSearch.bind(this);
  this.presetSearch = this.presetSearch.bind(this);
  }

  handleSearchInput(e){     //function that grab input and puts it in the action
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearchAction(value));
    console.log(value);
  }

  onButtonSearch(e){        //sends city as props to the axios call
    const { dispatch } =this.props;
    const { city } = this.props;
    dispatch(sendingSearchAction(city));
  }

  presetSearch(e){        //preset searches for individual buttons
    
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(sendingSearchAction(value));
    console.log(value);
  }

  
  render() {
    return (
      <div>
        <ul id='test-1'>
          <li id='test-2' value ='San Diego' onClick={this.presetSearch}>San Diego</li>
          <li id='test-2' value ='Houston' onClick={this.presetSearch}>Houston</li>
          <li id='test-2' value='Boston' onClick={this.presetSearch}>Boston</li>
          <li id='test-2' Value ='New York' onClick={this.presetSearch}>New York</li>
          <li id='test-2' value ='Los Angeles' onClick={this.presetSearch}>Los Angeles</li>
        </ul>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Hows the weather!" id="mail" name="email" onChange={ this.handleSearchInput } />
            <div className="input-group-append">
              <button type="button" className='btn btn-success' onClick={ this.onButtonSearch }>Hows the Weather?</button>
              
        </div>
            </div>
            
     </div>
     
      
    )
  }
}


