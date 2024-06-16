import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState('8');
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState('');

  const passwordgen = useCallback(() => {
    let pass ='';
    let s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let arr=[];
    if (numbers) s += '0123456789';
    if (special) s += '!@#$%^&*()_+[]{}|;:,.<>?';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * s.length + 1)
      pass += s.charAt(char)
      arr.push(Math.round(Math.random() * s.length + 1));
    }
    setPassword(pass);
    console.log(pass);
    console.log(arr);
    console.log(s);
    document.getElementById('copybutton').textContent = 'Copy';
    
  }, [length, numbers, special, setPassword]);

  const copypass=useCallback(()=>{
    document.getElementById('copybutton').textContent = 'Copied!';
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{passwordgen()},[length,numbers,special,passwordgen])
  return (
    <>

      <div className='flex justify-center mt-[100px]'>
        <div className='bg-gray-200 flex flex-col gap-6 justify bg-center w-3/4 px-10 py-8 items-center rounded-2xl'>
          <h1 className='text-4xl text-gray-700'>Password Generator</h1>
          <div className='flex flex-row'>
            <input type='text' readOnly className=' outline-none w-[300px] px-4 py-3'
              placeholder='password'
              value={password}
            ></input>
            <button id='copybutton' className='px-4 py-3 text-blue-500 hover:opacity-55 bg-blue-200'
            onClick={copypass}>Copy</button>
          </div>

          <div className='flex flex-row gap-6'>
            <div className='flex flex-row gap-2'>
              <input type='range'
                min={8}
                max={24}
                value={length}
                onChange={(e) => { setLength(e.target.value) }}
              ></input>
              <span>Length: {length}</span>
            </div>

            <div className='flex flex-row gap-2'>
              <input type='checkbox'
                defaultChecked={numbers}
                onChange={() => {
                  setNumbers((prev) => !prev)
                }}
              ></input>
              <label>Numbers</label>
            </div>
            <div className='flex flex-row gap-2'>
              <input type='checkbox'
                defaultChecked={special}
                onChange={() => {
                  setSpecial((prev) => !prev)
                }}
              ></input>
              <label>Special</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
