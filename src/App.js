import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Help from './pages/Help/Help'
import Privacy from './pages/Privacy/Privacy'
import Navbar from './components/Navbar';
// import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
         <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/about" element={<About/>}/>
           <Route exact path="/contact" element={<Contact/>}/>
           <Route exact path="/help" element={<Help/>}/>
           <Route exact path="/privacy" element={<Privacy/>}/>
         </Routes>
        {/* <Footer/>  */}
      </Router>
    </div>
  );
}

export default App;
