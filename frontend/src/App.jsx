import { useState } from 'react'
import viteLogo from '/vite.svg'
import Login from './pages/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
