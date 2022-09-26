import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchange-service.js';

// Business Logic

function currencyExchange(countryCurrency) {
  let promise = ExchangeRate.currencyExchange(countryCurrency);
  promise.then(function(data) {
    printElements(data);
  }, function(errorArray) {
    printError(errorArray);
  });
}
// UI Logic

function printElements(data) {
  document.querySelector('#showResponse').innerText = "";
  if (data[1].length === 3) {
    let currencyRate = `${data[0].conversion_rates[data[1]]}`;
    let userInput = document.querySelector('#us-dollars').value;
    let convertedCurrency = userInput * currencyRate;
    document.querySelector('#showResponse').innerText = "Your converted currency amount is: $" + convertedCurrency;
  } else {
    document.querySelector('#showResponse').innerText = "The currency you have selected does not exsist.";
  }
}

function printError(error) {
  ExchangeRate.response;
  document.querySelector('#showResponse').innerText = `There was an error accessing the exchange rate for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[0].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const countryCurrency = document.querySelector('#countryCurrency').value;
  currencyExchange(countryCurrency);
}

window.addEventListener("load", function() {
  this.document.querySelector('form').addEventListener('submit', handleFormSubmission);
});