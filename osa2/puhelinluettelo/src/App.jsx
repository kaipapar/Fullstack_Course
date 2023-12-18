import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './component/FilterForm'
import NewPerson from './component/NewPersonForm'
import RenderAll from './component/RenderAll'
import personService from './services/persons'
import Notification from './component/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Filtering
  const [filteredData, setFilteredData] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const [notification, setNotification] = useState(null)

  useEffect( () => {
      personService 
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      console.log('effect')
    }, [])
  
  console.log('render', persons.length, 'notes')


  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {name: newName, number: newNumber}
    console.log('index of p',persons.indexOf(personObject))
    if (persons.some(person => person.name === personObject.name && person.number.toString() !== personObject.number.toString())){
      if (window.confirm(`Would you like to update the number?`)){
        const matchingPerson = persons.find(person => person.name === personObject.name)
        console.log('id', matchingPerson.id)

        updateNumber(matchingPerson.id, personObject)
        console.log('number updated')
        notif('Number updated')

      }
    }else if (persons.some(person => person.name === personObject.name && person.number.toString() === personObject.number.toString())){
      window.alert(`${newName} is already added to phonebook`)
      console.log('person not updated nor added')
    }else{
      console.log('creating new person')
      notif('New Person created')
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))  //concat the new addition to the list of people
      })
    }      
    setFilteredData(persons)

    setNewName('')
    setNewNumber('')
  }

  const delPerson = (id) => {
    personService.del(id)
    personService.getAll().then(updated => {setPersons(updated)})
    notif('Person deleted')
  }

  const updateNumber = (id, newObject) => {
    console.log('updating!',id)
    personService
      .update(id, newObject)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      })
  }

  // tapahtumankäsittelijät
  const handleNameChange = (event) => {
    console.log('namechange',event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log('numberchange',event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log('filter event', event.target.value)
    setNewFilter(event.target.value)
    setFilteredData(persons) // reset filter
    console.log('tofilteredData',filteredData)    
    setFilteredData(filteredData.filter(item => // 
      item.name.toLocaleLowerCase().includes(event.target.value.toLowerCase())))
    console.log('filteredData',filteredData)    
  };

  const notif = (message) => {
    setNotification(`${message}`)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <FilterForm handler={handleFilterChange} 
                  value={newFilter}/>
      <h2>add a new</h2>
      <NewPerson newName= {newName} 
                  newNumber={newNumber} 
                  handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}
                  addName={addName}/>
      <h2>Numbers</h2>
      <RenderAll toRender={filteredData} 
                  delPerson={delPerson}/>

    </div>
  )

}


export default App