module.exports = function makeExchange(currency) {

  //создаём объект для хранения кол-во монет каждого типа

  var object = {};

  //проверка на (currency > 10000) && (currency <= 0);

  if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }

  if (currency <= 0) {
    return object;
  }

  //подсчёт кол-во монет каждого типа и передача значений в объект
    
  if (currency >= 50) {
    object.H = Math.floor(currency/50);
    currency = currency % 50;
  }

  if (currency >= 25) {
    object.Q = Math.floor(currency/25);
    currency = currency % 25;
  }

  if (currency >= 10) {
    object.D = Math.floor(currency/10);
    currency = currency % 10;
  }

  if (currency >= 5) {
    object.N = Math.floor(currency/5);
    currency = currency % 5;
  }

  if (currency >= 1) {
    object.P = Math.floor(currency/1);
    currency = currency % 1;
  }
  
  return object;
}