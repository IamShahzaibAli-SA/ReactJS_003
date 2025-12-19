import { useState } from 'react'
import './App.css'
import Robot from './Robot'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Robot name="Shahzaib Ali" bossName="Ninja" age="18"/>
      <Student name="Abdul Bari" id="989" topic="unkw"/>
      <Student name="Abdul Bari" id="989" topic="unkw"/>
      <Student name="Abdul Bari" id="989" topic="unkw"/>
      <Student name="Abdul Bari" id="989" topic="unkw"/>
      <Student name="Abdul Bari" id="989" topic="unkw"/>
    </>
  )
}

export default App
