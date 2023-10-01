import { useState } from 'react'
import FilterForm from './component/FilterForm'
import NewPerson from './component/NewPersonForm'
import RenderAll from './component/RenderAll'

const App = () => {
  /*const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) */
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Filtering
  const [filteredData, setFilteredData] = useState(persons)
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {name: newName, number: newNumber}
    console.log(persons.indexOf(personObject.name))
    if (persons.some(person => person.name === personObject.name))
      window.alert(`${newName} is already added to phonebook`)
    else
      setPersons(persons.concat(personObject))
      setFilteredData(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }

  const filterResult = (filterValue) => {
    setFilteredData(persons.filter(item => 
      item.name.toLocaleLowerCase().includes(filterValue.toLowerCase())))
  }

  // tapahtumankäsittelijät
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    filterResult(event.target.value) // Pass the filter value to a parent component or a callback function
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm onFilterChange={filterResult} 
                handler={handleFilterChange} 
                value={newFilter}/>
      <h2>add a new</h2>
      <NewPerson newName= {newName} 
                  newNumber={newNumber} 
                  handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}
                  addName={addName}/>
      <h2>Numbers</h2>
      <RenderAll toRender={filteredData}/>

    </div>
  )

}


export default App