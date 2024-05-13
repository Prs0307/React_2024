import { useState } from 'react'
  
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
   const [color,setColor]=useState("olive")
    
  return (
    <div className='w-full h-screen duration-200'
    style={{ backgroundColor:color}}
    >
      <h1 className="text-3xl font-bold rounded p-2"  >
      Welcome to Color Picker app !
    </h1>
    <div>
      <div>
        <div>
          This color Belongs to <strong>{color} : {}</strong>
        </div>
      </div>
    </div>



 
    <div className='fixed flex bg-white flex-wrap justify-center bottom-4 px-2 inset-x-0  shadow-lg  px-3 mr-2 py-2 rounded-2xl'>  



    <button className="flex outline-none px-4 py-1 mr-6 rounded-2xl text-white" onClick={()=>setColor('red')} style={{backgroundColor:'red'}}>Red</button>
    <button className="flex outline-none px-4 py-1 mr-6 rounded-2xl text-white" onClick={()=>setColor('blue')} style={{backgroundColor:'blue'}}>Blue</button>
    <button className="flex outline-none px-4 py-1 mr-6 rounded-2xl text-white" onClick={()=>setColor('green')} style={{backgroundColor:'green'}}>Green</button>
    <button className="flex outline-none px-4 py-1 mr-6 rounded-2xl text-white" onClick={()=>setColor('yellow')} style={{backgroundColor:'yellow'}}>yellow</button>
    </div>
      
       
      
    
    

    </div>
  )
}

export default App
