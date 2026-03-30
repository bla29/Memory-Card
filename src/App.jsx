import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      <Header
        count={count}
        score={score}
      />
      <Cards
        count={count}
        setCount={setCount}
        score={score}
        setScore={setScore}
      />
    </div>
  )
}

export default App
