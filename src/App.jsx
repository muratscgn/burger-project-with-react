import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
