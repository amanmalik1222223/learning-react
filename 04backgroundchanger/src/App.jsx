import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('bg-gray-200');

  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchstyle();
    }
  };

  const searchstyle = () => {
    if (color === '') {
      alert('Please enter a color in normal form');
      setBgColor('bg-gray-200');
    } else {
      // Tailwind class names need to be dynamic and valid
      // You can't use arbitrary colors directly in Tailwind classes like this
      // You should create a map of valid Tailwind colors or use inline styles for dynamic colors
      setBgColor(color);
    }
  };

  const bgStyle = {
    backgroundColor: color !== '' ? color : undefined,
  };

  return (
    <>
      <div id='background' style={bgStyle} className={`h-screen w-screen items-center justify-center align-middle flex flex-col gap-6 ${bgColor}`}>
        <h1 className='text-6xl font-semibold mb-12'>Background Changer</h1>
        <input
          className='py-2 outline-none w-[400px] border rounded-2xl flex justify-center text-2xl items-center px-8'
          placeholder='Enter color (e.g., blue)'
          value={color}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div className='gap-4 flex-col md:flex-row flex'>
          <button
            className='w-[260px] h-auto bg-blue-200 text-white hover:bg-blue-300 text-2xl px-6 py-2 border rounded-xl'
            onClick={searchstyle}
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
