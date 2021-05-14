'use strict';
/*
const selectPlan = (planNumber) => {
  const aktual = document.querySelector(`#plan${planNumber}`);
  aktual.classList.add('plan--selected');

  console.log(aktual);
};

selectPlan(3);


Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přídá k němu CSS třídu plan--selected. Vyzkoušejte vaši funkci v konzoli s různými čísly.
*/

const selectPlan = (planNumber) => {
  const neaktual = document.querySelector('.plan--selected');
  neaktual.classList.remove('plan--selected');

  const aktual = document.querySelector(`#plan${planNumber}`);
  aktual.classList.add('plan--selected');

  /*
  const neaktual = document.querySelectorAll(`.plan:not(#plan${planNumber})`);
  neaktual.classList.remove('.plan--selected');
*/

  console.log(aktual);
  console.log(neaktual);
};

selectPlan(2);

/* 
My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z pčíslušného prvku odebrat třídu plan--selected.
*/

/*
const selectPlan = (planNumber) => {
  const vse = document.querySelectorAll('.plan');

  console.log(vse[0]);

  vse[0].classList.remove('plan--selected');
  vse[1].classList.remove('plan--selected');
  vse[2].classList.remove('plan--selected');

  if (planNumber === 0) {
    vse[0].classList.add('plan--selected');
  }
  if (planNumber === 1) {
    vse[1].classList.add('plan--selected');
  }
  if (planNumber === 2) {
    vse[2].classList.add('plan--selected');
  }
}
*/
