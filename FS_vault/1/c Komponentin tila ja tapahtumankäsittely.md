[[2023-09-11]] #react #javascript  [Linkki sisältöön](https://fullstackopen.com/osa1/komponentin_tila_ja_tapahtumankasittely)
- propsit ovat julkisia komponentin sisällä
- komponenttien / funktioiden sisäkkäiset funktiot ovat juttu Javascriptissä
###### Destrukturointi
Voidaan korvata props olio välimuuttujana komponentin sisällä, korvataan props komponentin parametreissä niillä olioilla, joita oikeasti komponentin sisällä tarvitaan.

```js
const Hello = (props) => {
  const { name, age } = props
```
muuttuu muotoon:
```js
const Hello = ({ name, age }) => {
```

##### Sivun uudelleenrenderöinti


```js
const [ counter, setCounter ] = useState(0)
```
komponentille luodaan tila (state), joka saa alkuarvokseen nollan. `usestate(0)` funktio palautta taulukon jossa on kaksi alkiota: counte ja setcounter. Counter on aluksi 0 ja setCounter on vain viite funktioon, jolla counteria muutetaan.
```js
setTimeout(
  () => setCounter(counter + 1),
  1000
)
```
yllä sitten setCounter määritellään.
- Koska kun setCounter-iteraatiofunktiota kutsutaan, sitä kutsutaan loputtomasti. Loputtomuuden hallitsemiseksi tarvitaan yhden kutsun aikaväliä. Siksi setTimeout() on käytössä.
- setCounter päivitää counterin arvon, jonka usestate muistaa seuraavaa setCounterin() kutsua varten.

##### Tapahtumankäsittely
event handler funktio on funktio, jota kutsutaan, kun jotain tapahtuu. Esim jotain näppäintä painetaan tai hiirtä klikataan.
