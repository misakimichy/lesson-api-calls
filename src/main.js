import $ from 'jquery';
import { WeatherService } from "./weather-service";

// UI LOGIC BEGIN
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    // create instance of WeatherService class
    let weatherService = new WeatherService();

    // call the instance method and pass in user input
    let promise = weatherService.getWeatherByCity(city);

    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });  
  });
});