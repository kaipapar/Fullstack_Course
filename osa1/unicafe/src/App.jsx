import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad
  const average = all / 3
  const positive = good / all *100
  if (good+neutral+bad===0){
    return (
      <div>
        no feedback given
      </div>
    )
  }
    return (
      <table>
        <tbody>
          <StatisticsLine text='good' value={good}/>
          <StatisticsLine text='neutral' value={neutral}/>
          <StatisticsLine text='bad' value={bad}/>
          <StatisticsLine text='all' value={all}/>
          <StatisticsLine text='average' value={average}/>
          <StatisticsLine text='positive (%)' value={positive}/> 
        </tbody>
    </table>
    )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // luo kolme nappia
  //-->linkitä nappien painaukset tapahtumankäsittelijään
  //-->tulosta nappien painauksien määrä

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <h1>statistics:</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
        
    </div>
  )
}

export default App