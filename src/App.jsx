import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Hello, I'm Patrick Pan</h1>
      <p>Welcome to my personal website built with React!</p>
      <h3>Contact:</h3>
      <ul>
        <li>Email: siyupan1998@outlook.com</li>
        <li>GitHub: <a href="https://github.com/PatrickPan1998" target="_blank" rel="noreferrer">PatrickPan1998</a></li>
      </ul>
    </div>
  )
}

export default App
