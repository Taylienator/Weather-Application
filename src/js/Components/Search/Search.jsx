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
        <button type="button" className="btn btn-primary" onClick={ this.presetSearch } value="San Diego">San Diego</button>
        <button type="button" className="btn btn-primary" onClick={ this.presetSearch } value="Portland">Portland</button>
        <button type="button" className="btn btn-primary" onClick={ this.presetSearch } value="New York">New York</button>
        <button type="button" className="btn btn-primary" onClick={ this.presetSearch } value="Denair">Denair</button>
        <button type="button" className="btn btn-primary" onClick={ this.presetSearch } value="Los Angeles">Los Angeles</button>
        <button type="button" className="btn btn-primary" onClick={ this.presetSearch } value="Italy">Italy</button>
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


