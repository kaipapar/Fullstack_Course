#osa1 #react #javascript #vite @today
###### Vite
[React perusteita](https://react.dev/learn/your-first-component)
- React sovellukset koostuu komponenteista
- komponentit kirjoitetaan HTML:muodossa.
- komponentit on hyödyllisiä, sillä niitä pystyy uusiokäyttämään helposti, toisin kuin puhdasta HTML:llää, joka on rasittavaa kirjoittaa.
[!info]Ilmeisesti komponenttien sisällä ei ole HTML:llää vaan [JSX:iä](https://react.dev/learn/writing-markup-with-jsx)
- #JSX on kuin HTML mutta hakasulkeiden sisälle voi asettaa JS koodia.
>**react komponentti on JS funktio, jota voi maustaa markupilla/HTML:llä**
- komponentit voidaan merkata vietäväksi `export default` komennolla, joka tulee suoraa JavaScriptistä. 
    - tämän jälkeen ne voidaan tuoda toiseen tiedostoon helposti.

###### Syntaksia
- Komponenttien nimet alkaa aina isolla alkukirjaimella
- `function Profile() { koodia }`
    - tässä muodossa komponentin sisälle tarvitaan return() lauseke, jonka sisälle ahdamme renderöitävän sisällön.
- JavaScriptissä voidaan myös käyttää nuolifunktion määrittelyä `function Name = () => { koodia }`
- komponenteissa return() lauseke voidaan poistaa vaihtamalla käppyräsulkeet normaaleihin.

```js
const App = () => { // const == älä muuta tämän arvoa
  console.log('Hello from  komponentti') // printtautuu konsoliin selaimessa!
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```
- JSX tägit tulee aina sulkea, toisin kuin HTML, jossa osa tägeistä voi jättää avoimeksi
###### Propsit / parametrit
- propsit pystyy välittämään tietoa komponenteille
    - propsit ovat komponenttifunktioiden parametrejä
    - `<Komponentti argumentti=x />`
- propsit tulostuvat olioina konsoliin `console.log(props)`

- juurikomponentti on yleensä nimeltä App
- virheilmoitukset tulostuvat konsoliin
- olioita ei voi tulostaa/renderöitä sellaisinaan reactissa. ne pitää muuttaa alempiarvioisiksi tyypeiksi.
    - BTW Oliotaulukko on hyvin samantyylinen kuin struct C:ssä #C
