import React from 'react'

const Square = ({colorValue,hexValue,isDark}) => {
  return (
    <>
        <div 
            className='square' 
            style={{backgroundColor: colorValue,  color:isDark ? '#000' :'#FFF'}}
        >
            
            <p>{colorValue ? colorValue:"Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
          
           
        </div>
    </>
  )
}
Square.defaultProps={
  colorValue :'Empty Color Value'
}
export default Square