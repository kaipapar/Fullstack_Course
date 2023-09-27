import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  // tapahtumankäsittelijät
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {name: newName, number: newNumber}
    console.log(persons.indexOf(personObject.name))
    if (persons.some(person => person.name === personObject.name))
      window.alert(`${newName} is already added to phonebook`)
    else
      setPersons(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
          
          <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        debug: {newName} {newNumber}
        {persons.map(person => <p key={person.name}>{person.name} {person.number}</p> )}
      </div>

    </div>
  )

}


export default App