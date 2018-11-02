 import React from 'react';
import axios from 'axios';

 export function updateSearchAction(city){
     console.log()
     return{
         type: 'UPDATE_SEARCH_ACTION',
         payload: { city }
     };


 }

 

 export function sendingSearchAction(cityname){
    console.log('Button was pressed', cityname);
    return{
        type: 'SENDING_SEARCH_ACTION',
        payload: axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=892ba6fa975d8e11e74e5fdf6a31fc1e`)
          .then(res=>{
              return res;
              console.log('this is the response', res)
          }).catch(err=>{
              console.log('this is an err' ,err)
          })

        
    };
 }