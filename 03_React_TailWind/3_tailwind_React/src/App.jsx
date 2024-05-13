// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Cards  from './components/Cards'
import Navbar from './components/Navbar'
function App() {
  // const [count, setCount] = useState(0)
  // let  myArr = [2,3,4]
  return (
  
     <>
     <Navbar/>
    <h1 className='bg-blue-300 p-4 rounded-xl text-black mb-4 '>Tailwind Testing</h1>
    {/* <Cards channel="ChaiOrPrince" someobj = {myArr} /> */}
    
    <Cards userName = "Ajay " />
    <Cards userName  = "Vishal" />
    </>
  )
}

export default App
