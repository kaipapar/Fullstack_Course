import { useState } from 'react'

const RenderAll = ({toRender, delPerson}) => {
    console.log('toRender',toRender)
    return (
    <div>
        {toRender.map((person) => <p key={person.name}>{person.name} {person.number} 
        <button onClick={() => delPerson(person.id)}>delete</button>
        </p> )}
    </div>
    )
}

export default RenderAll