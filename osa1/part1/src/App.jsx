/*
const App = () => ( // React komponentti
  
  <div>
    <p>Hello world</p>
  </div>
)

//Kaksi tapaa tehdä tämä. Mun mielestä alempi on parempi.
//Sillä ainakaan C:ssä constit ei oo välttis best practises.
// Ylempi on kuitenkin kurssin tapa tehä asioita, joten...

function App() { 
  return (
  <div>
    <p>Hello world</p>
  </div> )
}*/
const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow- age
  }
  console.log(name, age)
  return (
    <div>
      <p>Hello {name}, you are {age} years old </p>
      <p>So you vere probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='poop' age={30+5}/> //kato miten modulaarista äiti
      <Hello name={nimi} age={ika} />
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App