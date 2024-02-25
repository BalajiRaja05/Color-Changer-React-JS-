import { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import Square from './Components/Square';

function App() {
  const [colorValue,setColorValue] = useState('')
  const [hexValue,setHexValue] = useState('')
  const [isDark,setIsDark] = useState(true)


  return (
   
    <div className="App ">
        <h1 className='text-center text-2xl font-semibold text-white py-10 '>Color Changer Mini Project</h1>
        <Square
          colorValue={colorValue}
          hexValue={hexValue}
          isDark ={isDark}
        />
        <InputField
           colorValue={colorValue}
           setColorValue={setColorValue}
           setHexValue={setHexValue}
           isDark={isDark}
           setIsDark={setIsDark}
        />
    </div>
  );
}

export default App;
