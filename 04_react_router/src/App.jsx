import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-600 p-4 '>React Router</h1> 
    {/* <Header />
    <Home />
    <Footer /> */}
    
    </>
    )
}

export default App
