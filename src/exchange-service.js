export default class ExchangeRate {
  static currencyExchange(usd, other) {
    return promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/234ac136b43917f74b1107c5/latest/USD=${city}&appid=${process.env.API_KEY}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, usd, other]);
        } else {
          reject([this, response, usd, other]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}