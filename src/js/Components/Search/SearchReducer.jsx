const defaultState = {
    city:'',
    weatherData: null,
    searchHistory:[]
  };
  
  export default function SearchReducer (state = defaultState, action) {
    const {type, payload} = action;
    switch(type){
          // Here in the case of the update description action 
         
        case 'UPDATE_SEARCH_ACTION':{return{...state, city: payload.city};}
        case 'SENDING_SEARCH_ACTION_FULFILLED':{return{
            
                ...state,
                    weatherData: payload.data.base,
                    cityName: payload.data.name,
                    cityTemp:`${payload.data.main.temp} F`,
                    cityPressure:payload.data.main.pressure,
                    cityHumidity:`${payload.data.main.humidity}%`,
                    cityTempLow:`${payload.data.main.temp_min} F`,
                    cityTempHigh:`${payload.data.main.temp_max} F`,
                    cityWindSpeed:`${payload.data.wind.speed} MPH`,
                    cityIcon:`https://openweathermap.org/img/w/${payload.data.weather[0].icon}.png`,
                    cityLat:`${payload.data.coord.lat}/`,
                    cityLong:payload.data.coord.lon,
                    searchHistory:[...state.searchHistory,
                        {
                            name:payload.data.name,
                            date: new Date().toLocaleDateString(),
                            time: new Date().toLocaleTimeString()
                        } 
                    ]
            
                
            };
        }
        case 'SENDING_SEARCH_ACTION_REJECTED': {
            return {
                
             error:true,

            }
        }

        default:{
            return state;
        }
    }
    
    
    
  }
  





















 