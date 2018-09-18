import React, { Component } from 'react'

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  createSearches() {
    const { searchHistory } = this.props;

    return searchHistory.map((value, index) => {
      console.log('this is the value', value);
      return (
        <div className="main-flex" key={[index]}>
          <div className="left-flex">
            <strong>{value.name}</strong>
          </div>
          <div className="right-flex">
            <p className="date-time">{value.date}</p>
            <p className="date-time">{value.time}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='card'>
              <div className='card-header text-white bg-info'>Weather History</div>
              <div className='card-body'>
          {this.createSearches()}
        </div>
      </div>
    );
  }
}

export default History;
