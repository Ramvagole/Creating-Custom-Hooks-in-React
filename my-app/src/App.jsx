import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCustom } from './components.jsx/customHooks'
function App() {
  let [value,inc,dec]=useCustom(0)

  return (
    <>
      {value}
      <br/>
      <button onClick={inc}>inc</button><br/>
      <button onClick={dec}>dec</button>
    </>
  )
}

export default App
