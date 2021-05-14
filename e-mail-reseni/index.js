'use strict';

const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};
/*
const fillBody = (body, name) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.textContent = body + ' ' + goodbye(name);
};
*/

const formalGoodbye = (name) => {
  return `S uctivym pozdravem ${name}`;
};

formalGoodbye('Jana Voborska');
console.log(formalGoodbye('Jana Voborska'));

const rudeGoodbye = (name) => {
  return `Stves me ${name}`;
};

rudeGoodbye('Jana');
console.log(rudeGoodbye('Jana'));

/* 
Udělejte z funkce fillBody funkci vyššího řádu. Přidejte jí třetí parametr goodbyeFunc, který představuje funkci, pomocí které se má vygenerovat závěrečný pozdrav. Vyzkoušejte zavolat funkci fillBody postupně s každou z vašich zdravících funkcí a ověřte, že vše správně funguje.
*/

const fillBody = (body, name, goodbyeFunc) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.textContent = `${body} ${goodbyeFunc(name)}`;

  return `${body} ${goodbyeFunc(name)}`;
};

fillBody('obsah mailu', 'Petra', rudeGoodbye);

console.log(fillBody('obsah mailu', 'Petra', rudeGoodbye));

fillBody('obsah mailu', 'Tomas', formalGoodbye);

console.log(fillBody('obsah mailu', 'Tomas', formalGoodbye));
