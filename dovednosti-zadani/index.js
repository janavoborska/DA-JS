'use strict';

console.log('funguju!');

const updateSkill = (idElm, zadaneCislo) => {
  const skillValueElm = document.querySelector(`${idElm} .skill__value`);

  skillValueElm.textContent = `${zadaneCislo} / 100`;

  const skillProgressElm = document.querySelector(`${idElm} .skill__progress`);

  skillProgressElm.style.width = `${zadaneCislo}%`;
};

const urovenZnalost1 = Number(prompt('zadejte od 0 do 100 vase znalosti'));

const urovenZnalost2 = Number(prompt('zadejte od 0 do 100 vase znalosti '));

const urovenZnalost3 = Number(
  prompt('zadejte od 0 do 100 uroven vasich znalosti'),
);

updateSkill('#skill1', urovenZnalost1);
updateSkill('#skill2', urovenZnalost2);
updateSkill('#skill3', urovenZnalost3);
