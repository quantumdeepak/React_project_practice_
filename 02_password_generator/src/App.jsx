import { useState,useCallback } from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8);
  let [number_valid, setNumberValid] = useState(false);
  let [symbol_valid, setSymbolValid] = useState(false);
  let [password, setpassword] = useState("");

  // set password methos is also considered as dependance and on its basis we will make some changes.
  let password_generator = useCallback( () => {
    let pass ="";
    let str= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    if(number_valid){
      str+="0123456789";
    }
    if(symbol_valid) str += "!@#$%^&*()_+";

    for(let i=0;i<length;i++){
      pass += str.charAt(Math.floor(Math.random()*str.length));
      setpassword(pass);
    }


  },[length, number_valid, symbol_valid , setpassword])


  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-4xl text-center text-white text-center my-3'>
      Password Generator
    </h1>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
        <input
        type="text"
        value={password}
        className='otline-none w-full py-1 px-3'
        placeholder='Your Password'
        readOnly
        />
        <button
        className='bg-blue-700 p-5 rounded-full hover:bg-gray-600 text-white py-3 py-0.5 shrink-0'
        >Copy Password</button>
      </div>
      <div className = "flex text-sm gap-x-2">
        <div className='flex items-center gap-x-1'>
          <input
          id='number'
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange = { (e) => {setLength(e.target.value)}}
          />
          <label>Length : {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked ={number_valid}
          id="number_input" 
          onChange={ () => {setNumberValid((pre)=!pre)}}
          />
          <label htmlFor="number_input">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked ={symbol_valid} />
          Symbols
        </div>
      </div>
    </div>
  )
}

export default App
