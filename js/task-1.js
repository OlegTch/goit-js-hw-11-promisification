// Задание 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.
console.log('Задание 1');
// const delay = ms => {
const delay = ms => {
  // Твой код
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

// delay.then(logger);
// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// console.log(delay(2000).then(logger)); // Resolved after 2000ms
// console.log(delay(1000).then(logger)); // Resolved after 1000ms
// console.log(delay(1500).then(logger)); // Resolved after 1500ms
