import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './ReactMenu/Home';
import About from './ReactMenu/About';
import Service from './ReactMenu/Service';
import Contact from './ReactMenu/Contact';
import Navbar from './Navbar';
import Footer from "./Footer";
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
