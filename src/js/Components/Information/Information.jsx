import React from 'react';


export default class Information extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(weatherData);
    const { weatherData } = this.props;
    const { cityName } = this.props;
    const { cityTemp } = this.props;
    const {cityPressure} =this.props;
    const {cityHumidity} =this.props;
    const {cityTempLow} =this.props;
    const {cityTempHigh} =this.props;
    const {cityWindSpeed} =this.props;
    const {cityIcon} = this.props;
    const {cityLat} = this.props;
    const {cityLong} = this.props;
    return (
        
            <div className='card'>
              <div className='card-header text-white bg-info'>What's the weather like?</div>
              <div className='card-body'>
                <div className='card-title text-center'>
                  <h1>{ cityName} <img className='weather-icon' src={cityIcon} alt="" /></h1>
                     <p>Lat/Long: {cityLat}{cityLong}</p>
                  
                </div>               
                <div className='card-body'>
                  <div className='row no-gutters'>
                    <div className='col-md-4'>Temperature(F) <br /><p className='text-success'>{cityTemp}</p></div>
                    <div className='col-md-4'>Pressure <br /><p className='text-success'>{cityPressure}</p></div>
                    <div className='col-md-4'>Humidity <br /><p className='text-success'>{cityHumidity}</p></div>
                  </div>
                  <div className='row no-gutters'>
                    <div className='col-md-4'>Lowest Temp(F) <br /> <p className='text-success'>{cityTempLow}</p></div>
                    <div className='col-md-4'>Highest Temp(F) <br /><p className='text-success'>{cityTempHigh}</p></div>
                    <div className='col-md-4'>Wind Speed <br /><p className='text-success'>{ cityWindSpeed}</p></div>
                  </div>
                </div>
              </div>
            </div>
    )
  }
}
