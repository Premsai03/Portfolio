import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import '../Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
    initial={{
      y: -100, opacity: 0
    }}
    animate={{
      y: 0, opacity: 1
    }} 
    transition={{
      duration: 0.5,
      delay: 0.2,
      ease: 'easeInOut',
    }}
    className="fixed top-0 left-0 w-full z-10 flex items-center justify-between h-16 px-8 py-9 backdrop-blur-xl bg-opacity-30 md:px-16 sm:px-24">
      <div className={`text-primary-text-color text-2xl font-wixMadeforDisplay font-semibold`}>
        <Link to='/'>Pe</Link>
      </div>

      <div onClick={() => setIsOpen(!isOpen)} className='text-3xl text-primary-text-color z-10 absolute right-8 top-6 cursor-pointer sm:hidden'>
        <i className={isOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
      </div>
      
      <div className={`sm:flex items-center gap-14 text-base ${isOpen ? 'flex flex-col absolute top-16 left-0 h-screen w-full bg-black bg-opacity-60 py-8' : 'hidden'} sm:static sm:flex-row sm:bg-transparent`}>
        <Link to='/' className={`text-third-text-color sm:text-primary-text-color animated-underline font-wixMadeforDisplay text-xl font-semibold sm:font-normal sm:text-base lg:text-lg cursor-pointer sm:mb-0`}>Home</Link>
        <Link to='/about' className={`text-third-text-color sm:text-primary-text-color animated-underline font-wixMadeforDisplay text-xl font-semibold sm:font-normal sm:text-base lg:text-lg cursor-pointer sm:mb-0`}>About me</Link>
        <Link to='/projects' className={`text-third-text-color sm:text-primary-text-color animated-underline font-wixMadeforDisplay text-xl font-semibold sm:font-normal sm:text-base lg:text-lg cursor-pointer sm:mb-0`}>Projects</Link>
        <Link to='/contact' className={`text-third-text-color sm:text-primary-text-color animated-underline font-wixMadeforDisplay text-xl font-semibold sm:font-normal sm:text-base lg:text-lg cursor-pointer sm:mb-0`}>Contact</Link>
      </div>
      
    </motion.nav>
  );
};

export default Navbar;