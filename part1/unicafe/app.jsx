import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {props.total}</p>
      <p>average {props.average}</p>
      <p>positive {props.positivePercent}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercent, setpositivePercent] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    const newTotal = newGood + neutral + bad
    setGood(newGood)
    setTotal(newTotal)
    setAverage((newGood - bad) / newTotal)
    setpositivePercent((newGood / newTotal) * 100)
  }

  const handleSetNeutral = () => {
    const newNeutral = neutral + 1
    const newTotal = good + newNeutral + bad
    setNeutral(newNeutral)
    setTotal(newTotal)
    setAverage((good - bad) / newTotal)
    setpositivePercent((good / newTotal) * 100)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    const newTotal = good + neutral + newBad
    setBad(newBad)
    setTotal(newTotal)
    setAverage((good - newBad) / newTotal)
    setpositivePercent((good / newTotal) * 100)
  }

  const handleAverage = () => {
    setAverage((good - bad) / total)
  }

  
  return (
    <div>
        <h2>give feedback</h2>
    {good}
     <Button onClick={handleGoodClick} text = 'good' />
    {neutral}
     <Button onClick={handleSetNeutral} text = 'neutral' />
     {bad}
     <Button onClick={handleBadClick} text = 'bad' />
     <div>
    </div>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positivePercent={positivePercent} />
    </div>
  )
}

export default App