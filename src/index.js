import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyExchangeService from './js/MoneyExchangeService.js';

//Business Logic

function cashChange(target_code, amount) {
  let promise = MoneyExchangeService.cashChange(amount);
  promise.then(function(response) {
    if(response.conversion_result) {
      console.log(conversion_result);
      printElements(response);
    } else {
      printError();
    }
  });
}

//User Interface Logic

function printElements(conversion_result) {
  document.querySelector('#showCashConversion').innerText = `The total converted amount is $ ${conversion_result}.`;
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