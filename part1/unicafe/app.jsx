import { useState } from 'react'

const Button = ({ onClick, text }) => {  
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticalLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, total, average, positivePercent }) => {
  if (total === 0) {
    return <p>No feedback given</p>
  }
  
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticalLine text="good" value={good} />
          <StatisticalLine text="neutral" value={neutral} />
          <StatisticalLine text="bad" value={bad} />
          <StatisticalLine text="total" value={total} />
          <StatisticalLine text="average" value={average} />
          <StatisticalLine text="positive" value={`${positivePercent}%`} />
        </tbody>
      </table>
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

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleSetNeutral} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        average={average} 
        positivePercent={positivePercent} 
      />
    </div>
  )
}

export default App