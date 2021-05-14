const weakPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String(i % 10);
  }

  return result;
};

const mediumPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    const digit = Math.floor(Math.random() * 10);
    result += String(digit);
  }

  return result;
};

const strongPassword = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
  let result = '';
  for (let i = 0; i < len; i++) {
    const charIndex = Math.floor(Math.random() * chars.length);
    result += chars[charIndex];
  }

  return result;
};

weakPassword(12);
mediumPassword(12);
strongPassword(12);

console.log(weakPassword(12));
console.log(mediumPassword(12));
console.log(strongPassword(12));

/*
Napište funkci createAccount, která se bude tvářit, že zakládá nový uživatelský účet. Funkce bude mít dva parametry user a pwdGen. První bude uživatelské jméno a druhý bude funkce, pomocí které se má vygenerovat heslo pro tento účet. Funkce createAccount vrátí řetězec, který bude obsahovat jméno uživatele a heslo vygenerovaní voláním funkce pwdGen obdržené jaké druhý parametr. Funkci pwdGen předejte číslo 9 jako délku hesla.
*/

let user = 'Nekdo';
let pwdGen = weakPassword(12);
console.log(user, pwdGen);

const createAccount = (user, pwdGen) => {
  return `Uzivatelske jmeno je ${user} a heslo je ${pwdGen}`;
};

strongPassword(9);
console.log(strongPassword(9));
createAccount('Tonda', strongPassword(9));
console.log(createAccount('Tonda', strongPassword(9)));
