import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
        <Person name="Md Mehedi Hasan"></Person>
        <Person></Person>
        <Person></Person>
    </div>
  )
}
function Person(propos){
  return (
    <div className='person'>
      <h1>{propos.name}</h1>
    </div>
  )
}

export default App
