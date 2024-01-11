import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import aboutIMG from '../src/images/testing.jpg';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='*' Component={Home} />
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/service' Component={Service} />
          <Route path='/contact' Component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
