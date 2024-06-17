import { useState } from 'react'
import { Input } from './commponents'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)

    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,
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
                        <Input
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onAmountChange={(amount)=> setAmount(amount)}
                            onCurrencyChange={(currency)=> setAmount(amount)}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            SWAP
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>

    </div>
);
}


export default App
