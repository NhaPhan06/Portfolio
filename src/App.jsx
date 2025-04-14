import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'
import Index from './Component/Index/Index'
import Project from './Component/Project/Project'
import About  from './Component/About/About'

import Project2 from './Component/Project/Project2'


function App() {

  return (
    <>
      <div>
        <Header />
        <Main/>
        <Index />
        <Project />
        {/* <Project2/> */}
        <About/>
      </div>
    </>
  )
}

export default App
