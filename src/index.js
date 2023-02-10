import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyExchangeService from './js/MoneyExchangeService.js';

//Business Logic

function cashChange(target_code, amount) {
  let promise = MoneyExchangeService.cashChange(target_code, amount);
  promise.then(function(response) {
    if(response.conversion_result) {
      printElements(target_code, amount);
    } else {
      printError();
    }
  });
}

//User Interface Logic

function printElements(response, target_code, amount) {
  document.querySelector('#showCashConversion').innerText = `The total of $${amount} converted to ${target_code} is $${response.conversion_result}.`;
}

function printError(response) {
  document.querySelector('#showCashConversion').innerText = `There was an error processing your exchange rate. ${response.result}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const moola = document.querySelector('#number-input').value;
  const altCode = document.querySelector('#code-input').value;
  document.querySelector('#number-input').value = null;
  cashChange(altCode, moola);
}

window.addEventListener("load",function() {
  document.querySelector('#money-exchange-form').addEventListener("submit", handleFormSubmission);
});