[[2023-09-11]] #javascript 
[Sisältöä](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
#### JS-käytäntö 
- Koodi suoritetaan komennolla `node tiedosto.js`
- koodia voi myös kirjoittaa avaamalla terminaalissa `node` tai selaimen developer toolin konsoliin.
##### Syntaksia
```js
const x = 1
let y = 5

console.log(x, y)   // tulostuu 1, 5
y += 10
console.log(x, y)   // tulostuu 1, 15
y = 'teksti'
console.log(x, y)   // tulostuu 1, teksti
x = 4               // aiheuttaa virheen
```
- `const` == vakiomuuttuja
	- voidaan muuttaa jos vakio on olio, mutta vain sen olion eri ominaisuuksia
	- "block scope"
- `let` == "normaali" muuttuja
- `var` == myös normaali muuttuja
	- myös "block scope"
	- [Var ja let eroja](https://medium.com/podiihq/javascript-variables-should-you-use-let-var-or-const-394f7645c88f)
- [Video: var, let ja const eroja](https://www.youtube.com/watch?v=sjyJBL5fkp8&feature=youtu.be&ab_channel=FunFunFunction)
- JS on dynamically typed eli muuttujien tyypit voivat vaihtua kääntämisen aikana.
- Vaikka JS on dynaamisesti tyypitetty, on tyypillistä ettei käytetä esim listoja, vaan muuttumattomia tietorakenteita, kuten linkitettyä listaa, pinoa tai jonoa.
	- Reactissa voidaan käyttää `concat()` metodia, joka kopioi uuteen taulukkoon vanhan taulukon sisällön ja siihen lisättävän sisällön.
	


###### Taulukot
```js
const t = [1, -1, 3]

console.log(t.length) // tulostuu 3
console.log(t[1])     // tulostuu -1

t.push(5)             // lisätään taulukkoon luku 5

console.log(t.length) // tulostuu 4

t.forEach(value => {
  console.log(value)  // tulostuu 1, -1, 3, 5 omille riveilleen
})     
```
- Tässä nähdään että `const` muuttujaa pystyy muokkamaan
- `x.forEach(callBackFn, thisArg)` metodi iteroi taulukon läpi ja suorittaa _jonkin_ funktion jokaiselle taulukon elementille.
Taulukkometodeja:
- `x.concat(y)` luo uuden taulukon, joka sisältää taulukon x ja muuttujan y sisällön.
- `x.map(y)` luo uuden taulukon, joka _kartoittaa_ jokaisen x taulukon elementin yhtälöllä/lambdafunktiolla y
- esim: 
```js
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // tulostuu [2, 4, 6]
```
tai
```js
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
```
- yllä tehdään HTML-taulukko

- taulukoita voidaan muuttaa sijoitustlauseen avulla
```js
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // tulostuu 1, 2
console.log(rest)          // tulostuu [3, 4 ,5]
```
- [tämä on psykedeelistä.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

###### Oliot
```js
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'Filosofian tohtori',
}

const object2 = {
  name: 'Full Stack -websovelluskehitys',
  level: 'aineopinto',
  size: 5,
}

const object3 = {
  name: {
    first: 'Juha',
    last: 'Tauriainen',
  },
  grades: [2, 3, 5, 3],
  department: 'TKTL',
}
```
- oliot vaikuttaa C:n structeilta.
- mutta niissä voidaan käyttää key-value paritekniikkaa, kuten pythonissa
```js
console.log(object1.name)         // tulostuu Arto Hellas
const fieldName = 'age' 
console.log(object1[fieldName])    // tulostuu 35
```
- tai pistenotaatiota, kuten C:ssä
	- tässä tapauksessa ei voida käyttää key-value paria, sillä JS ei osaa lukea välilyönnillistä merkkijonoa ilman hakasulkeita.
```js
object1.address = 'Tapiola'
object1['secret number'] = 12341
```

###### Funktiot
- Funktioita voidaan määritellä nuolinotaation avulla kuten [[a Reactin alkeet]]
- aaltosulkeita ei tarvita funktion määrittelyssä, jos funktio palauttaa ainoastaan yhden lausekkeen. --> silloin funktion määrittely voidaan pitää yhdellä rivillä
	- yhden rivin funktiomäärittely antaa mahdollisuuden anonyymeille lambdafunktioille:
	```js
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared on nyt [1, 4, 9]
```
- funktiot voidaan määritellä `const` avainsanalla nuolinotaation kautta, mutta perinteinen tyyli on käyttää avainsanaa `function`

- kurssi sanoo näin:
 > Määrittelytapoja on kaksi, funktiolle voidaan antaa [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) ‑tyyppisessä määrittelyssä _nimi_, jonka avulla funktioon voidaan viitata:

```js
function product(a, b) {
  return a * b
}

const vastaus = product(2, 6)
```

>Toinen tapa on tehdä määrittely [funktiolausekkeena](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function). Tällöin funktiolle ei tarvitse antaa nimeä ja määrittely voi sijaita muun koodin seassa:

```js
const average = function(a, b) {
  return (a + b) / 2
}

const vastaus = average(2, 5)
```

- en ole vakuuttunut mistään mitä tuossa sanotaan.