import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic

function currencyExchange(usd, other) {
  let promise = ExchangeRate.currencyExchange(usd, other);
  promise.then(function() {
    printElements();
  }, function(errorArray) {
    printError(errorArray);
  });
}
// UI Logic

function printElements(data) {
  document.querySelector('#showResponse').innerText = ``;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

/*function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  const lat = parseInt(document.querySelector('#lat').value);
  const long = parseInt(document.querySelector('#long').value);
  document.querySelector('#location').value = null;
  document.querySelector('#lat').value = null;
  document.querySelector('#long').value = null;
  getWeather(city);
  getWeatherPartTwo(lat, long);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});*/