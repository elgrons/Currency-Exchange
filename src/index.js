import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyExchangeService from './js/MoneyExchangeService';

//Business Logic

function cashChange(target_code, amount) {
  MoneyExchangeService.cashChange(target_code, amount)
    .then(function(response) {
      if(response.conversion_result) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}

//User Interface Logic

function printElements(response) {
  document.querySelector('#showCashConversion').innerText = `The total converted to ${response.target_code} is $${response.conversion_result}.`;
}

function printError(error) {
  document.querySelector('#showError').innerText = `There was an error processing your monetary conversion. ${error}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const target_code = document.getElementById('code-input').value;
  const amount = document.querySelector('#number-input').value;
  document.querySelector('#number-input').value = null;
  cashChange(target_code, amount);
}

window.addEventListener("load",function() {
  document.querySelector('#money-exchange-form').addEventListener("submit", handleFormSubmission);
});