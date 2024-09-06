import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen  duration 200 fixed flex justify-center items-center" 
      style={{backgroundColor:color}}>
        <div  className="w-full h-screen  duration 200 fixed flex justify-center items-center">
        <h1 className='text-2xl font-serif top-12 fixed  rounded bg-white' >Press the button to change the background colour</h1>
        </div>
        <div className='fixed flex gap-5 justify-center bottom-12 px-3 py-2 rounded bg-white' >

        <button onClick={()=>setColor("red")} className='outline-none shadow-lg px-4 py-2 rounded-full text-white' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("green")} className='outline-none shadow-lg px-4 py-2 rounded-full text-white' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColor("yellow")} className='outline-none shadow-lg px-4 py-2 rounded-full text-black' style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
