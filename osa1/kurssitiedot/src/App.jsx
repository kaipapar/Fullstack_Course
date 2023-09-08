/*
@File    :   App.jsx
@Time    :   08.09.2023 19:01:07
@Author  :   Karri Korsu
@Version :   1.0
@Contact :   karri.korsu@edu.turkuamk.fi
@Desc    :   None
*/


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        For this part: {props.part} 
        Exercise count is:{props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        The total amount of exercises done was: {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course}/>
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App