const Header = (props) => {
  return (
    <h1 key={props.id}>{props.course}</h1>
  )
}
  
const CourseContent = (props) => {
  const { parts } = props

  return (
      <div>
          <ul>
              {parts.map(part =>
                  <li key={part.id}>
                      {part.name} {part.exercises}
                  </li>
              )}
          </ul>
      </div>
  )
}


const ExercisesTotal = (props) => {
  const total = props.total.reduce((prev, curr) => prev + curr.exercises, 0)
  return (
    <h3 key={props.id}>Total of {total} exercises</h3>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <CourseContent key={props.id} parts={props.course.parts} />
      <ExercisesTotal total={props.course.parts} />
    </div>
  )
}



export default Course