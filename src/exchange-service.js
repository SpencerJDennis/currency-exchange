export default class ExchangeRate {
  static currencyExchange(countryCurrency) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, countryCurrency]);
        } else {
          reject([this, response, countryCurrency]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}