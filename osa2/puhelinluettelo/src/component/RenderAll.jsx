import { useState } from 'react'

const RenderAll = ({toRender}) => {
    console.log(toRender)
    return (
    <div>
        {toRender.map(person => <p key={person.name}>{person.name} {person.number}</p> )}
    </div>
    )
}

export default RenderAll