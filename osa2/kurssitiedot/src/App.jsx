/*
@File    :   App.jsx
@Time    :   08.09.2023 19:01:07
@Author  :   Karri Korsu
@Version :   1.0
@Contact :   karri.korsu@edu.turkuamk.fi
@Desc    :   None
*/

const Course = ({course}) => {
  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
  </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
const Part = ({content}) => (
  <div>
  <li>For this part: {content.id} Exercise count is: {content.exercises}</li>
</div>
)


const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      <ul>
        {parts.map(part => <Part key={part.id} content={part}/>)}
      </ul>
      
    </div>
  )
}
const Total = (props) => {
  const initialValue = 0
  const total = props.parts.reduce((accumulator, part) => accumulator + part.exercises, initialValue)
  return (
    <div>
      <p>
        The total amount of exercises done was: {total}
      </p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      }
    ]
  }
  return (
    <div>
        <Course course={course} />
    </div>
  )
}

export default App

