'use strict';

/*
console.log('napojeno');
const jmeno = document.querySelector('.zitra');
console.log(jmeno);

const displayName = (json) => {
  console.log(json.data.namedays.cz);
  console.log(jmeno);
  jmeno.textContent = json.data.namedays.cz;
};

fetch('https://api.abalin.net/tomorrow?country=cz')
  .then((response) => response.json())
  .then(displayName);


Napište aplikaci, která uživateli zobrazí, kdo má svátek zítra. K tomu použíjte endpoint /tomorrow, který funguje podobně jako endpoint /to
*/

const formular = document.querySelector('.formular');
formular.addEventListener('submit', (udalost) => {
  udalost.preventDefault();
});

const den = document.querySelector('.den');
const mesic = document.querySelector('.mesic');

const zadanoDen = den.value;
const zadanoMesic = mesic.value;

console.log('Den', zadanoDen);
console.log('Mesic', zadanoMesic);

/*
const displayName = (json) => {
  console.log(json.data.?.cz);
  
 return 
 
};

fetch(`https://api.abalin.net/namedays?country=cz&month=${zadanoDen}day=${zadanoMesic)`) =>
  .then((response) => response.json())
  .then((json) => {
    const prvniPolozka = json.results[0]
    const den = prvniPolozka.day
    const mesic = prvniPolozka.month
    console.log(den)
    console.log(mesic)
    danyDen.textContent = `${den}. ${mesic}.`
  })
})

/*
Vytvořte aplikaci, které bude obsahovat dvě textová políčka a tlačítko. Uživatel do políček zadá číslo dne a číslo měsíce a po stisknutí tlačítka se mu na stránce zobrazí, kdo má tento den svátek.


const svatekDnes = document.querySelector('.svatek-dnes')

// promise
console.log('Začínám')

fetch('https://api.abalin.net/today?country=ee')
	.then((response) => response.json())
	.then((json) => {
		console.log('Přišli mi data')
		console.log(json)
		svatekDnes.textContent = json.data.namedays.ee
	})

console.log('Končím')

const danyDen = document.querySelector('.svatek-dany-den')
const jmeno = document.querySelector('.jmeno')
const zeme = document.querySelector('.zeme')
const formular = document.querySelector('.formular')

formular.addEventListener('submit', (udalost) => {
	udalost.preventDefault()

	const zdaneJmeno = jmeno.value
	const zdanaZeme = zeme.value

	console.log('Jméno', zdaneJmeno)
	console.log('Země', zdanaZeme)

	{"country code":"cz","results":[{"day":26,"month":5,"name":"Filip"}]}
*/
