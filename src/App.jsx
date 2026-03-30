import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header
        count={count}
      />
      <Cards
        count={count}
        setCount={setCount}
      />
    </div>
  )
}

export default App
