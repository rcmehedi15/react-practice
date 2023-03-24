import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <Person name="Mehedi" ></Person>
      <Person name="Rifat"></Person>
      <Person name="Bali"></Person>
    </div>
  )
}


function Person(props){
  const [power,setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div className='personStyle'>
      <h2>Name : {props.name}</h2>
      <h2>speciality : {props.name}</h2>
      <h4>power : {power}</h4>
      <button onClick={boostPower}> Boost The Power</button>
    </div>
  )
}

export default App
