import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import React, { useEffect } from 'react';

function App() {
  let [themeMode, setThemeMode] = useState('light') 
  // let lightTheme = {
  //   backgroundColor: '#fff',
  //   color: '#000'
  // }
  // let darkTheme = {
  //   backgroundColor: '#000',
  //   color: '#fff'
  // }

  let lightTheme = () =>{
    setThemeMode('light')
  }
  let darkTheme = () =>{
    setThemeMode('dark')
  }


  // Actual Changing of theme 



  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme Button */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <Card />
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
