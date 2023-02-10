# 💰 Currency Exchanger 💰

#### A currency exchange application made for my Week 6 Independent Project at Epicodus Coding School focusing on API calls.

#### By Eliot Gronstal 2.10.23 💵 💴 💶 💷

## 💰 Technologies Used 💰

* 💸 Javascript
* 💸 HTML
* 💸 CSS
* 💸 Webpack
* 💸 Lint
* 💸 Node
* 💸 Github


## 💰 Description 💰

A currency exchange application made for my Week 6 Independent Project at Epicodus Coding School focusing on API calls. 

A user can type in an amount (in U.S. dollars) and then choose from 5 other types of currency for it to be converted to. To determine the most recent exchange rate, the application will make an API call.

If the API call results in an error (any message not a 200 OK), the application will return a notification to the user that states what the error is.


## 💰 Setup/Installation Requirements 💰 

* 💸 Clone this repository from Github
* 💸 Visit the [ExchangeRate-API site](https://www.exchangerate-api.com/). Input your email address and click the "Get Free Key" button.
* 💸 You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
* 💸 At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
* 💸 Create a .env file and add it to your .gitignore. Make sure to commit your .gitignore at this point, before moving on.
* 💸 Include API_KEY={your API key} in the text of the .env file at the top level of your directory and keep spelling and capitlization identical.
* 💸 Navigate to the root folder of this downloaded repo in your terminal.
* 💸 Run npm install.
* 💸 Run npm run start to open the pgae in your default browser.

* 💸 Worth noting for non-Mac users: in the package.json "scripts" for lint: line 9's has an extra " ' " surrounding src:... which allows es lint to access files recursively  "lint": "'eslint src/*.js'",

## Known Bugs 💵 💴 💶 💷

* _Any known issues_
* 💸 Please reach out to Eliot with any questions or concerns at: eliot.lauren@gmail.com

## License 💵 💴 💶 💷

MIT

Copyright (c) 2023 Eliot Gronstal