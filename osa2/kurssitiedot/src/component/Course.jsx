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

  export default Course