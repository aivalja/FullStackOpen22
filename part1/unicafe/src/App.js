import { useState } from 'react'

const Display = props => <tr><td>{props.text+props.value}</td></tr>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Statistics = ({good, neutral, bad}) => {
  let sum = good + neutral + bad
  if(!sum){
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>

      <tbody>
        <Display value={good} text="good "/>
        <Display value={neutral} text="neutral " />
        <Display value={bad} text="bad " />
        <Display value={sum} text="all " />
        <Display value={(good - bad)/sum} text="average " />
        <Display value={good/sum} text="positive " />
      </tbody>
  </table>
  )
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    console.log('Add good')
    setGood(good + 1)
  }
  const addNeutral = () => {
    console.log('Add neutral')
    setNeutral(neutral + 1)
  }
  const addBad = () => {
    console.log('Add bad')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() =>addGood()} text='Good'/>
      <Button handleClick={() =>addNeutral()} text='Neutral'/>
      <Button handleClick={() =>addBad()} text='Bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App