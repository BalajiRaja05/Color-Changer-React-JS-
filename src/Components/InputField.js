import colorNames from 'colornames'
import React from 'react'


const InputField = ({colorValue,setColorValue,setHexValue,isDark,setIsDark}) => {
  
  return (
    <>
        <form className='inputDiv ' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor='colorValue'></label>
            <input
                type='text'
                className='input '
                placeholder='Add color name'
                value={colorValue}
                autoFocus
                required
                onChange={(e)=>{
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <button 
                className='btn'
                type='button'
                onClick={()=>setIsDark (!isDark) }
            >
            Text toggle button
            </button>
        </form>
        
    </>
  )
}

export default InputField