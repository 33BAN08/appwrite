import React from 'react'

export default function ThemeOptions({theme}) {
    const setTheme = () => {
        document.querySelector('body').setAttribute('data-theme', theme);
    }

  return (
    <div onClick={setTheme} className='theme-option' id={`theme-${theme}`}>
        
    </div>
  )
}
