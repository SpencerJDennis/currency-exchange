import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic

function currencyExchange() {
  let promise = new Promise(function(resolve, reject) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/234ac136b43917f74b1107c5/latest/USD?usd=${usd}&other=${other}&appid=${process.env.API_KEY}`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      resolve([response, usd, other]);
    } else {
      reject([this, response, usd, other]);
    }
  });

  request.open("GET", url, true);
  request.send();
});

promise.then(function() {
  printElements();
}, function(errorArray) {
  printError(errorArray);
});
}
// UI Logic

function printElements(data) {
  document.querySelector('#showResponse').innerText = `The humidity in ${data[1]} is ${data[0].main.humidity}%. 
  The temperature in Farenheit is ${1.8*(data[0].main.temp-273) + 32} degrees. It feels like ${1.8*(data[0].main.feels_like-273) + 32} Farenheit.`;
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
});