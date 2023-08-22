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
  document.querySelector('#showError').innerText = null;
}

function printError() {
  document.querySelector('#showError').innerText = `ERROR: Please enter numbers other than zero in the supported currency types.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const target_code = document.getElementById('code-input').value;
  const amount = document.querySelector('#number-input').value;
  if (!target_code) {
    document.getElementById("badMoney").removeAttribute("class");
  } else {
    document.querySelector('#number-input').value = null;
    document.getElementById("badMoney").setAttribute("class", "hidden");
    cashChange(target_code, amount);
  }
}

window.addEventListener("load",function() {
  document.querySelector('#money-exchange-form').addEventListener("submit", handleFormSubmission);
});