import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'
import Index from './Component/Index/Index'

function App() {

  return (
    <>
      <div>
        <Header />
        <Main/>
        <Index />
      </div>
    </>
  )
}

export default App
