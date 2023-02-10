import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyExchangeService from './js/MoneyExchangeService.js';

//Business Logic

function cashChange(amount) {
  let promise = MoneyExchangeService.cashChange(amount);
  promise.then(function(response) {
    if(response.conversion_rates) {
      printElements(response);
    } else {
      printError();
    }
  });
}

//User Interface Logic

function printElements(conversion_rates) {
  document.querySelector('#showCashConversion').innerText = `The total converted amount is $ ${conversion_rates}.`;
}

function printError() {
  document.querySelector('#showCashConversion').innerText = `There was an error processing your exchange rate.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const moola = document.querySelector('#number-input').value;
  document.querySelector('#number-input').value = null;
  cashChange(moola);
}

window.addEventListener("load",function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});