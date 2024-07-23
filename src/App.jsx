import { useState } from 'react'
import {Inputbox} from './components'
import useCurrency from './hooks/useCurrency'

function App() {
  const [amount,setamount] = useState(0);
  const [from,setfrom] = useState("usd");
  const [to,setto] = useState("inr");
  const [convert , setconvert] = useState(0);
  const currencyinfo = useCurrency(from);
  const option = Object.keys(currencyinfo);
  const swap = ()=>{
    setfrom(to);
    setto(from);
    setamount(convert);
    setconvert(amount);
  }
  const converting =()=>{
  setconvert(amount*currencyinfo[to])
}
    

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.corporatefinanceinstitute.com/assets/AdobeStock_96687939.jpeg')`,
        }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         converting();
                      }}
                  >
                      <div className="w-full mb-1">
                          <Inputbox
                              label="From"
                              currencyoptions= {option}
                              amount = {amount}
                              onamountchange={(amount)=>{
                                setamount(amount);
                              }}
                              oncurrencychange = {(currency)=>{
                                setfrom(currency);
                              }}
                              selectcurrency = {from}
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
                          <Inputbox
                              label="To"
                              currencyoptions= {option}
                              amount = {convert}
                              amountDisable = {true}
                              oncurrencychange = {(currency)=>{
                                setto(currency);
                              }}
                              selectcurrency={to}
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}

export default App
