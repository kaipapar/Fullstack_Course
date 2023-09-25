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
/*      <Content parts={course.parts}/>
      <Total parts={course.parts}/>*/


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
const Part = (props) => (
  <div>
  <p>
    For this part: {props.part} Exercise count is:{props.exercises}
  </p>
</div>
)

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        The total amount of exercises done was: {props.parts[0].exercises 
                                                +props.parts[1].exercises+
                                                props.parts[2].exercises}
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

