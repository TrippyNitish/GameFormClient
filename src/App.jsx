import { useState } from 'react'
import './App.css'
import FormSubmit from './Pages/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FormSubmit/>
      </div>
    </>
  )
}

export default App
