export default class MoneyExchangeService {

  static cashChange(target_code, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target_code}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `There was an error processing your monetary conversion. ${response.error-type}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}