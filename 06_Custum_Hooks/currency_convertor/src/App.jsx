import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './assets/bg_img.jpg'
function App() {
  // const [count, setCount] = useState(0)

  const [amount,setAmount]=useState()
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')

  const [convertedAmount,setConvertedAmount]=useState(0)

  // hooks

  const currencyInfo=useCurrencyInfo(from)

  // call obj -> key // 

  const options=Object.keys(currencyInfo)
//   console.log(options+"sjbnjco./iobo -________>>>>>>>>>>>>>>>>>>>>")

  // swap 

  const swap = ()=>{
    
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    setAmount(0)
  }
  
 const convert = ()=>{
  setConvertedAmount(amount*currencyInfo[to])
 }

//  BackgroundImage="D:\WEB_dEV\Library\React\Pop-Up\2024\React_2024\06_Custum_Hooks\currency_convertor\src\assets\bg_img.jpg"

// const BackgroundImage ='./assets/bg_img.jpg'
 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          // backgroundImage: `url('${BackgroundImage}')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          onAmountchange={(amount)=>setAmount(amount)}
                          onCurrencychange={(currency)=>setFrom(currency)}
                          currencyoptions={options}
                          selectCurrency={from}

                    
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyoptions={options}
                          onCurrencychange={(currency)=>setTo(currency)}
                          selectCurrency={to}
                          amountDisabled
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from} to {to}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
