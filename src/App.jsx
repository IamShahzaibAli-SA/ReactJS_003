import { useState } from 'react'
import './App.css'
import Robot from './Robot'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Robot name="Shahzaib Ali" bossName="Ninja" age="18" isStudent={true} />
      <Student name="Abdul Bari" id="989" topic="unkw" />
      <Student name="Abdul Bari" id="989" topic="unkw" />
      <Student name="Abdul Bari" id="989" topic="unkw" />
      <Student name="Abdul Bari" id="989" topic="unkw" />
      <Student name="Abdul Bari" id="989" topic="unkw" />
      <Student name="Abdul Bari" id="989" topic="unkw" />
      <Student name="Abdul Bari" id="989" topic="unkw" />
      <Student name="Abdul Bari" id="989" topic="unkw" />
      <div>
        <p>HELLO PETER </p>
      </div>
      <Student name="Abdul Bari" id="989" topic="unkw" />
      <div className='flex justify-center'>
        <Student name="Abdul Bari" id="989" topic="unkw" />
      </div>
    </>
  )
}

export default App
