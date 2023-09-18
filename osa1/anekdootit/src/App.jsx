import { useState } from 'react'

const Button = (handleClick) => {
  return (
    <button onClick={handleClick}>
      next anecdote
    </button>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const len = anecdotes.length
  const selection = () => setSelected(Math.floor(Math.random() * len))
  const [points, setPoints] = useState(Array(len).fill(0))//{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0}
  const [max, setMax] = useState(0)

  

  const vote = () => {
    const copy = [ ...points ]
    copy[selected] += 1
    console.log(copy)
    setPoints(copy)
    setMax(Math.max(...copy))
    console.log(max)
  }
  console.log(selected)
  console.log(points)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <button onClick={selection}>New anecdote </button>
      <button onClick={vote}>Vote for me</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]}</p>
      <p>With {max} votes</p>
    </div>
  )
}

export default App