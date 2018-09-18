import { connect } from 'react-redux';
import Information from './Information';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
    console.log('this is', store);
    return {
      city: store.search.city,
      weatherData: store.search.weatherData,
      cityName: store.search.cityName,
      cityTemp:store.search.cityTemp,
      cityPressure:store.search.cityPressure,
      cityHumidity:store.search.cityHumidity,
      cityTempLow:store.search.cityTempLow,
      cityTempHigh:store.search.cityTempHigh,
      cityWindSpeed:store.search.cityWindSpeed,
      cityIcon:store.search.cityIcon,
      cityLat:store.search.cityLat,
      cityLong:store.search.cityLong
    };
  }
  
  // This might look odd but, connect returns a function,
  // that is then called with the component itself.
  export default connect(mapStoreToProps)(Information);