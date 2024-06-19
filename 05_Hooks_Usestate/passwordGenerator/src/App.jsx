import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)

  const [numAllowed,setNumallowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef
  const passwordref = useRef(null)
  const copiedText = useRef(null)

  
  const copypasswordToclipBoard=useCallback(()=>{
    // copiedText.current?.innerText('copied') // this way 
    if (copiedText.current) {
      copiedText.current.innerText = 'Copied!';
      setTimeout(() => {
        copiedText.current.innerText = 'Copy';
      }, 200); // Change the message back after 2 seconds
    }
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator  = useCallback(()=>{
    let pass = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*(){}/"
    for (let i = 1; i <  length; i++) {
      const char = Math.floor(Math.random()*str.length +1);
      pass = pass + str.charAt(char)
    }
    setPassword(pass)


  },[length,numAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed, setPassword, passwordGenerator])




  return (
    <>


     {/* <h3 className=" bg-orange-300">
      Hello world!
    </h3> */}
      {/* <p>You Clicked Button {count} times</p>
      <button type="button" onClick={()=>{
        setCount(count+1)
      }}>
        click me
      </button> */}
    <div className="w-full text-black text-center mx-auto rounded-2xl px-4 py-3 my-8 shadow-md max-w-md bg-blue-200">
    <h1 className="text-center text-white \">
    Password Generator
    </h1>
      <div className="flex shadow-md  rounded-lg overflow-hidden  mb-4 ">

        <input type="text" 
        name=""
         value={password}
          placeholder='password...'
           className="outline-none w-full py-1 px-3"
         id=""
          readOnly  
          ref={passwordref}
         />
         <button
         onClick={copypasswordToclipBoard}
         className='outline-none bg-blue-600 text-white 
         px-3 py-1 shrink-0'
         ref={copiedText}
         > copy

         </button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        name="" id=""
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>setLength(e.target.value)}
        />
        <label>len: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          name="" id="number-input"
          defaultChecked={numAllowed}
          onChange={()=>{
          setNumallowed((prev)=>!prev);
          }}
          /> numbers
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          name="" id="char-input"
          defaultChecked={charAllowed}
          onChange={()=>{
          setCharAllowed((prev)=>!prev);
          }}
          /> special character
        </div>
        </div>
    </div>


    </>
  )
}

export default App
