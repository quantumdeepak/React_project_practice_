import { useState } from "react"


function App() {
  let [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          // onClick={() => setColor("Violet")}
          onClick={setColor.bind(this, "Violet")}

          className="outline-none px-4 py-1 rounded-full text White shadow-lg"
          style={{backgroundColor: "Violet"}}
          >Violet</button>
          <button className="outline-none px-4 py-1 rounded-full text White shadow-lg"
          style={{backgroundColor: "Indigo"}}
          >Indigo</button>
          <button className="outline-none px-4 py-1 rounded-full text White shadow-lg"
          style={{backgroundColor: "Blue"}}
          >Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text White shadow-lg"
          style={{backgroundColor: "Green"}}
          >Greeen</button>
          <button className="outline-none px-4 py-1 rounded-full text White shadow-lg"
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text White shadow-lg"
          style={{backgroundColor: "Orange"}}
          >Orange</button>
          <button className="outline-none px-4 py-1 rounded-full text White shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
        </div>
      </div>

    </div>
  )
}

export default App
