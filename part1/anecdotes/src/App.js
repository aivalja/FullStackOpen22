import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  //setVotes(new Uint8Array(anecdotes.length()))

  const generate_anecdote = () => {
    let random_number = getRandomInt(0,anecdotes.length)
    console.log('Next number:', random_number)
    setSelected(random_number)
  }

  const vote = () => {
    const votes_copy = [...votes]
    console.log("voted")
    votes_copy[selected] += 1
    setVotes(votes_copy)
  }

  const bestAnecdete = () => {
    return(
      <p>
        {anecdotes[votes.indexOf(Math.max(...votes))]}
      </p>
    )
  }
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={() =>vote()} text='Vote' />
      <Button handleClick={() =>generate_anecdote()} text='Next anecdote'/>
      <p>Has {votes[selected]} votes</p>
      <h1>Anecdote with most votes</h1>
      {bestAnecdete()}
      
    </div>
  )
}

export default App