'use strict';

console.log('funguju!');

/*
const hodiny = {
  hours: 12,
  minutes: 34,
};

const hodinyDalsi = {
  hours: 10,
  minutes: 40,
};

const hodinyElm = document.querySelector('#app');
const Clock = (props) => {
  return `<div id="app">
<div class="clock">
  <span class="clock__hours">${props.hours}</span>:<span class="clock__minutes"
    >${props.minutes}</span
  >
</div>`;
};

Clock(hodiny);
hodinyElm.innerHTML = Clock(hodiny);
hodinyElm.innerHTML += Clock(hodinyDalsi);
*/

/*
Zkuste vyrobit pole hodin a zobrazit je pomocí cyklu na stránce.
*/

const clocks = [
  {
    hours: 12,
    minutes: 34,
  },

  {
    hours: 10,
    minutes: 40,
  },

  {
    hours: 12,
    minutes: 30,
  },
];

const hodinyElm = document.querySelector('#app');
const Clock = (props) => {
  return `<div id="app">
<div class="clock">
  <span class="clock__hours">${props.hours}</span>:<span class="clock__minutes"
    >${props.minutes}</span
  >
</div>`;
};

for (let i = 0; i < clocks.length; i++) {
  hodinyElm.innerHTML += Clock(clocks[i]);
}
