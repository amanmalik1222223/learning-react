import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  const obj = {
    obj1: {
      username: 'user1',
      btn: 'Button1'
    },
    obj2: {
      username: 'user2',
      btn: 'Button2'
    },
    obj3: {
      username: 'user3',
      btn: 'Button3'
    },
    obj4: {
      username: 'user4',
      btn: 'Button4'
    }
  };

  return (
    <>
      <div>
      <h1 className='mb-10'>Tailwind css</h1>
      {Object.values(obj).map((item)=>
      <Card username={item.username} btn={item.btn}/>
      )}
      </div>
      
    </>
  )
}

export default App
