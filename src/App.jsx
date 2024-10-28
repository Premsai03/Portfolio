import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar component
import About from './pages/About';  // About page
import Projects from './pages/Projects';  // Projects page
import Technologies from './pages/Technologies';  // Technologies page
import Contact from './pages/Contact';  // Contact page
import Thankyou from './pages/Thankyou';  // Thankyou page
import Home from './pages/Home';  // Home page
import './App.css'  // App.css file
import Footer from './components/Footer';


function App() {

  return (
    <>
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-bgColor"></div>
    </div>
    <div className='container mx-auto px-4 overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </div>
    <Footer className='fixed bottom-0' />
    </>
  )
}

export default App
