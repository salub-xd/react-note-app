import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Darkmode from './components/darkmode/Darkmode';
import Error from './pages/error/Error';
const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Darkmode />
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          {/* <Route path={'/about'} element={<About />} /> */}
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'*'} element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
