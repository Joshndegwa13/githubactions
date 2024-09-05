import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  const handleclick = () => {
    setMessage('Good Morning Devs');
  }
 return (
  <div>
    <button onClick={handleclick} className='click-btn'>
      click me 
    </button>
    <p>{message}</p>
  </div>
 );
}
export default App;