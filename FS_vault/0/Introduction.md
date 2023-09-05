[[2023-09-04]]
[Kurssin aloitus](https://fullstackopen.com/osa0/yleista)
#osa0 
#### Kurssin alku
Main points from the first slides:
teknologiat:
- React-kirjasto
- Node.js 
	- -> Rest ja GraphQL
Jaksojen rakenne:
1. Lue jakso läpi ja tee muistiinpanoja
2. Tee tehtävät
	- tehtävät koostuu samasta ohjelmasta jota laajennetaan tehtävien kuluessa.
#### b Web-sovelluksen toimintaperiaatteita
- Konsoli aina auki
- HTTP protokolla on portti selaimen ja web palvelimen välillä. 
- Get on sisältöpyyntö tämän portin osakkaiden välillä.
- Esimerkkisivun aukaisu aloittaa HTTP pyyntöjen sarjan, jossa selain pyytää GET komennolla serveriltä HTML tiedoston. HTML tiedoston saatuaan lähtee matkaan toinen GET pyyntö, jotta saataisiin esimerkkikuva näkyville, renderöityä.
- Tämä kuvaa perinteisen web-sovelluksen toimintaperiaatteita.
- Konsolipaneelissa näkyvä sivun koodi on ainoastaan käyttäjälle/selaimelle ilmenevä koodi, jonka palvelin lähettää selaimelle.
	- Esimerkissä muistilappujen määrä on dynaamisesti luotu, mutta se ei selviä konsolissa olevasta koodista.
	- Koodin ${noteCount} on template string joka korvataan muuttujan notesCount arvolla.
- Perinteisesti selaimen ja palvelimen välinen suhde on tämä.
	- Selain pyytää asioita, palvelin sisältää kaiken logiikan ja se vastaa pyyntöihin.
	- Esimerkissä on käytetty Node.js Express frameworkkia
- Notes sivulla selain ajaa main.js skriptin joka pyytää data.json tiedoston sisältöä tulostettavaksi ruudulle.
- DOM- Document Object Model.-API Rajapinta tekee mahdolliseksi sivun muokkauksen suoraan konsolista. #DOM

#### CSS
#CSS
[[2023-09-05]]
- Cascading Style Sheets eli CSS on kieli, jonka avulla web-sovellusten ulkoasu määritellään.
- Luokkaselektorit erottelevat sivun eri elementit, jotta niitä voidaan tyylitellä erikseen.
- Luokka= attribuutti, Luokkaselektori= alkaa aina pisteellä
- Luokat liitetään HTML elementteihin HTML koodissa
- HTML elementeillä on muitakin attribuutteja kuin luokat esim ID

#### Lomake ja HTTP POST
- Lomakkeen lähetys esimerkissä aiheuttaa 5 HTTP pyyntöä
	1. Redirect käyttäen POST pyyntöä statuksella 302. Tämä ohjaa sivun itseensä
	2. eli sivu päivitetään
	3. - 5. Sivun lataukseen liittyviä pyyntöjä
#HTTP
#### AJAX
- AJAXilla pystytään tekemään dynaamisia verkkosivuja, jotka voivat ladata uutta tietoa näkyville päivittämättä sivua.
- TS muokata vain niitä osia sivusta joita on tarpeen muokata
SPA on tavallaan kehitys AJAX ajattelumallista. 
#AJAX
#### JS-kirjastot
- DOM-api saadaan helpommin hyödynnetyksi.
	- sivuja voidaan muokata helpommin.
- Saadaan cross browser toiminnallisuutta, jota ei ennen vanhaan JS:llä pystytty tekemään.
	- esim JQuery
- Nykyään asiat tehdän Reactilla.