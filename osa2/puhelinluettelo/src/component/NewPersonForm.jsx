import { useState } from 'react'

const NewPerson = ( {newName, newNumber, addName, handleNameChange, handleNumberChange} ) => {
    console.log('newperson exe',newName, newNumber)
    return (
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
    )
}

export default NewPerson