import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
      {/* whenever the / path is opened or clicked, it should take us to the home page */}
        <Route path='/' element={<Home/>} /> 
        {/* whenever the coin/ path or the coinId is opened or clicked, it should take us to the coin page */}
        <Route path='coin/:coinId' element={<Coin/>} /> 
      </Routes>
      {/* footer to be added after routes because it will appear on all the pages. both the coin and home pages*/}
      <Footer/>
    </div>
  )
}

export default App
