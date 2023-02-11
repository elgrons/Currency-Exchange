import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import MoneyExchangeService from './js/MoneyExchangeService.js';

//Business Logic

function cashChange(target_code, amount) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target_code}/${amount}`;
  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response);
    } else if (amount === 0.00) {
      printError(response);
    }
    else if (this.status === !200) {
      printError(response);
    }
  });
  request.open("GET", url, true);
  request.send();
}

//User Interface Logic

function printElements(response) {
  document.querySelector('#showCashConversion').innerText = `The total converted to ${response.target_code} is $${response.conversion_result}.`;
}

function printError(response) {
  document.querySelector('#showError').innerText = `There was an error processing your exchange rate. Please enter numbers other than zero in the supported currently only. ${response.result} ${response["error-type"]}`;
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