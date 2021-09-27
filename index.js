/*
? Functions
*/
/*
!спросить у пользователя его возраст (prompt).
!написать функцию isAdult которая вернёт true если возраст пользователя >= 18.
!Записать ответ функции в переменную.
!Выведите alert ('Совершеннолетний') если ответ функции true.
*/
function user() {
  let age;

  do {
    age = Number(prompt("Напишите свой возраст (10-80)"));
  } while (isNaN(age) || age < 10 || age > 80);

  let adult;

  function isAdult() {
    if (age >= 18) {
      return (adult = true);
    }
  }

  isAdult();

  if (adult) {
    return alert("Совершеннолетний");
  }

  return alert("Несовершеннолетний");
}

/*
!напишите две функции перевода метров в сантиметры, и метров в дюймы (1 метр =
!39.37 дюймов)
*/
function mToCm(m) {
  return m * 100;
}

function mToD(m) {
  return m * 39.37;
}

/*
!функция которая принимает число и вернёт его кубическую степень
*/
function coub(num) {
  return Math.pow(num, 3);
}

/*
!напишите программу “угадай число от 0 до 10”.
!для случайного числа используйте Math.random() и округление Math.round()
*/
function guessNum() {
  let userNum = Number(prompt("Угадайте число от 0 до 10"));
  let num = Math.round(Math.random() * 10);

  while (userNum !== num) {
    do {
      alert("Попробуйте ещё раз!");
      userNum = Number(prompt("Введите число от 0 до 10"));
    } while (isNaN(userNum) || userNum < 0 || userNum > 10);
  }

  return alert("Вы угадали!");
}

/*
? Cycles
*/
/*
!вывести числа от 0 до 9
!вывести числа от 1 до 10
*/
function zeroToNine() {
  for (let i = 0; i <= 9; i++) {
    console.log(i);
  }
}

function oneToTen() {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}

/*
!вывести 10 чисел в степени 2
*/
function tenNumbersPowTwo() {
  for (let i = 1; i < 11; i++) {
    let num = i + Math.round(Math.random() * 10);
    console.log(`${num}^2 = ${num * num}`);
  }
}

/*
!вывести таблицу умножения на 9
*/
function multiplicationTableNine() {
  for (let i = 0; i < 10; i++) {
    console.log(`${i} * 9 = ${i * 9}`);
  }
}

/*
!с помощью двух циклов вывести полную таблицу 
!умножения для всех чисел от 1 до 9
*/
function multiplicationTable() {
  for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

/*
!вычислить сумму нечетных чисел от 1 до 20. Пример, buffer += index
*/
function oddOneToTwenty() {
  let sum = 0;

  for (let i = 1; i < 21; i += 2) {
    sum += i;
  }

  return sum;
}

/*
!Вывод чисел от 25 до 0 (порядок уменьшения)
*/
function fromTwentyFiveToZero() {
  for (let i = 25; i >= 0; i--) {
    console.log(i);
  }
}

/*
!Вывести числа от 0 до 20 с шагом 5
*/
function zeroToTwentyStepFive() {
  for (let i = 0; i <= 20; i += 5) {
    console.log(i);
  }
}

/*
!Вывести числа от 1 до 20 кратные 5 без остатка
*/
function multipliesFive() {
  for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

/*
!вывести таблицу значений для функции y = -3x2 + 5x - 2 
!для значения х от -2 до 2 (включительно) с шагом 0.5
*/
function func() {
  for (let x = -2; x <= 2; x += 0.5) {
    console.log((y = -3 * x * x + 5 * x - 2));
  }
}

/*
!попросить пользователя (prompt) решить пример “2 + 2 * 2 =” 
!(или любой другой пример на ваш вкус).
!Используя цикл while высвечивать (повторять) пример
!до тех пор пока пользователь не решит его
*/
function exercise() {
  let userAnswer = Number(prompt("Решите пример 2 + 2 * 2 ="));
  let answer = 6;

  while (userAnswer !== answer) {
    do {
      alert("Попробуйте ещё раз!");
      userAnswer = Number(prompt("Решите пример 2 + 2 * 2 ="));
    } while (isNaN(userAnswer));
  }

  return alert("Поздравляем пример решен!");
}

/*
? Таски на условия:
*/
/*
!спросить у пользователя (prompt) число и 
!ответить (alert) 'Верно' если число равно 10.
*/
function trueTen() {
  if (Number(prompt("Напишите число 10")) === 10) {
    alert("True");
  }
}

/*
!Если число из предыдущего задания
!больше 5 И меньше 15 то вывести 'привет'
*/
function hello() {
  let num = Number(prompt("Напишите число 5 < num < 15"));
  if (num > 5 && num < 15) {
    alert("Hello");
  }
}

/*
!Если число из предыдущего задания больше 5 ИЛИ меньше 10
!то вывести 'Всегда true'
*/
function alwaysTrue() {
  let num = Number(prompt("Write any number"));
  if (num > 5 || num < 10) {
    alert("Always True");
  }
}

/*
!спросить у пользователя (функция prompt) ответ на один общеизвестный факт на ваш
!вкус.
!например, “как называется наша планета?”, "какого цвета трава?"
!и высветить ему сообщение правильно он ответил или нет.
*/
function planet() {
  let userAnswer = prompt("Our planet name?");

  while (userAnswer !== "Earth" && userAnswer !== "earth") {
    alert("Wrong. Try again");
    userAnswer = prompt("Our planet name?");
  }

  alert("Absolutely right!");
}

/*
!вычислить стоимость заказа пиццы. известно что данный вид пиццы за 100 грамм
!стоит 30 грн.
!скидка 3% предоставляется если вес заказ больше 1 кг
!вывести сколько стоит со скидкой эта пицца если вес 1.2 кг
*/
function pizza() {
  const initialPrice = 30;
  let price = 0;
  do {
    weight = Number(prompt("Пиццу какиого веса вы хотите?"));
  } while (isNaN(weight));

  let discountPrice = 0;

  price = weight * 10 * initialPrice;

  if (weight > 1) {
    discountPrice = price - Math.round((3 / 100) * price);
  }

  return discountPrice;
}

/*
!проверить является ли введенное пользователем число простым (делиться только на
!себя и на единицу)
*/
function simple() {
  do {
    num = Number(prompt("Введите число"));
  } while (isNaN(num));

  if (num === 2 || num % 2 === 1 && num % num === 0) {
    alert("Это простое число");
  } else {
    alert("Это не простое число");
  }
}
