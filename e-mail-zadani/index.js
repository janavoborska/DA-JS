/*const goodbye = () => {return "Nashledanou";};

console.log(goodbye())

const goodbye = (name) => {return 'S pozdravem $name';},const goodbye = () => {return "Nashledanou";};

console.log(goodbye())

const goodbye = (name) => {return 'S pozdravem $name';},
*/

/*
const fillSubject = (subject) => {
  const aElm = document.querySelector('.email__subject');
  aElm.innerHTML = `${subject}`;
};

nebo
*/

const fillSubject = (subject) => {
  const aElm = document.querySelector('.email__subject');
  aElm.innerHTML = subject;
};

fillSubject('Ahoj');

const fillBody = (body) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = `${body}`;
};

fillBody('tohle je zprava');

/*
const convertToCZK = (suma, mena) => {
  const prevodEUR = suma * mena;
  if (mena === 'EUR') {
    return 27.015 * suma;
  } else if (mena === 'GBP') {
    return 29.615 * suma;
  } else if (mena === 'USD') {
    return 23.197 * suma;
  } else {
    return null;
  }
};
console.log(convertToCZK(25, 'EUR'));
console.log(convertToCZK(25, 'GBP'));
console.log(convertToCZK(25, 'USD'));
console.log(convertToCZK(65, 'ZLT'));
*/

const salary = (wage, hours, days) => {
  let plat = wage * hours * days;
  return plat;
};

const taxed = (platHruby, dan) => {
  let poZdaneni = platHruby * dan;

  return poZdaneni;
};

let platHruby = salary(600, 8, 21);

console.log(salary(600, 8, 21));
console.log(taxed(platHruby, 0.85));

/*
const name = 'Franta';

const greet = (name) => {
  const name = 'Pepa';
  console.log(name);
  return 'Kuba
};

console.log(greet('Jožin'));
*/

const calc = (num1, op, num2) => {
  let vyraz;
  if (op === '+') {
    vyraz = num1 + num2;
  } else if (op === '-') {
    vyraz = num1 - num2;
  } else if (op === '*') {
    vyraz = num1 * num2;
  } else if (op === '/') {
    if (num2 === 0) {
      console.log('Nulou se neda delit, blbecku');
    } else {
      vyraz = num1 / num2;
    }
  }
  return vyraz;
};

console.log(calc(3, '/', 0));
