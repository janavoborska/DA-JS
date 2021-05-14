'use strick';

console.log('funguju');

const justFood = (kolikLidi) => {
  let taxa = 300;
  return `Caterin Just Food dodan pro ${kolikLidi} za ${kolikLidi * taxa}`;
};
console.log(justFood(100));

const yourMama = (kolikLidi) => {
  let taxa = 500;
  return `Caterin Your Mama dodan pro ${kolikLidi} za ${kolikLidi * taxa}`;
};
console.log(yourMama(100));

const flavourHaven = (kolikLidi) => {
  let taxa = 1000;
  //let cena = kolikLidi * taxa;
  //return `Caterin Flavour Haven dodan pro ${kolikLidi} za ${cena}`; to je pro prvni cast ukolu
  return `Catering Flavour Haven dodan za ${kolikLidi * taxa} Kc`;
};

console.log(flavourHaven(100));

const createEvent = (event, kolik, catering) => {
  return `Udalost ${event} s cateringem od ${catering(
    kolik,
  )} pro ${kolik} osob`;
};

createEvent('svatba', 150, flavourHaven);
createEvent('promoce', 50, yourMama);

console.log(createEvent('svatba', 150, flavourHaven));
console.log(createEvent('promoce', 50, yourMama));
