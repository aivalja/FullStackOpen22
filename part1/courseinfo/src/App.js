const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  let parts = []
  props.parts.forEach(part => {
    parts.push(<Part name={part.name} count={part.exercises}/>)
  });
  return parts
}

const Part = (props) => {
  return(
    <p>
      {props.name} {props.count}
    </p>
  )
}

const Total = (props) => {
  let totalCount = 0
  props.total.forEach(element => {
    totalCount += element.exercises
  });
  return(
      <p>Number of exercises {totalCount}</p>
    
  )
}

const Course = (props) => {
  let elements = []
  elements.push(<Header course={props.course.name} />)
  elements.push(<Content parts={props.course.parts}/>)
  elements.push(<Total total={props.course.parts}/>)
  return(elements)
}


const App = () => {
  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
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