const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const CourseContent = (props) => {
  let parts = []
  props.parts.forEach(part => {
    parts.push(<CoursePart name={part.name} count={part.exercises}/>)
  });
  return parts
}

const CoursePart = (props) => {
  return(
    <p>
      {props.name} {props.count}
    </p>
  )
}

const ExercisesTotal = (props) => {
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
  elements.push(<Header course={props.course.name}/>)
  elements.push(<CourseContent parts={props.course.parts}/>)
  elements.push(<ExercisesTotal total={props.course.parts}/>)
  return(elements)
}


const App = () => {
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