import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyExchangeService from './js/MoneyExchangeService.js';

//Business Logic

function cashChange(target_code, amount) {
  MoneyExchangeService.cashChange(target_code, amount);
  .then(function(response) {
    if(response.conversion_result) {
      printElements(response);
    } else {
      printError();
    }
  });
}

//User Interface Logic

function printElements(response) {
  document.querySelector('#showCashConversion').innerText = `The total of $${amount} converted to ${target_code} is $${response.conversion_result}.`;
  console.log(response);
}

function printError(response) {
  document.querySelector('#showCashConversion').innerText = `There was an error processing your exchange rate. ${response.result}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const altCode = document.getElementById('code-input').value;
  const moola = document.querySelector('#number-input').value;
  // document.querySelector('#number-input').value = null;
  // document.getElementById('code-input').value = null;
  cashChange(altCode, moola);
}

window.addEventListener("load",function() {
  document.querySelector('#money-exchange-form').addEventListener("submit", handleFormSubmission);
});