import React from 'react'
import Img from '../images/profile.jpg';
import { motion } from 'framer-motion';


const Hero = () => {

  return (
  <>
    <div className='flex flex-col items-center mb-20 justify-between h-fit pt-28 lg:flex-row lg:px-16 lg:flex lg:items-start lg:pt-48'>
      <div className='flex flex-col gap-8 lg:flex'>
        <motion.h1 
        initial={{
          x: -100, opacity: 0
        }}
        animate={{
          x: 0, opacity: 1
        }} 
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: 'easeInOut',
        }}
        className='text-primary-text-color font-wixMadeforDisplay font-light text-[44px] lg:-ml-1 text-center lg:text-start lg:text-7xl lg:font-normal'>Premsai Ellendula</motion.h1>
        <motion.div 
        initial={{
          x: -100, opacity: 0
        }}
        animate={{
          x: 0, opacity: 1
        }} 
        transition={{
          duration: 1,
          delay: 0.5,
          ease: 'easeInOut',
        }}
        className='flex flex-col'
        >
        <h1 className='text-primary-text-color font-wixMadeforDisplay -mt-3 text-[33px] font-light text-center lg:text-start'>
          Frontend Developer
        </h1>
        </motion.div>
        
        <motion.p 
        initial={{
          x: -100, opacity: 0
        }}
        animate={{
          x: 0, opacity: 1
        }} 
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: 'easeInOut',
        }}
        className='max-w-xl md:max-w-lg font-wixMadeforText font-light text-black md:text-sm lg:text-base'>I am a passionate frontend developer and a web designer with a knack for crafting robust and scalable web applications and designing beautiful user interfaces. I have honed my skills in technologies like JavaScript, React.js, Tailwind css and no-code platforms like Figma and Webflow. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
      </div>
      
      <div className='mt-10 md:ml-16 lg:mt-0'>
        <motion.img 
        initial={{
          x: 100, opacity: 0
        }}
        animate={{
          x: 0, opacity: 1
        }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: 'easeInOut',
        }}
         className='h-[410px] md:h-[36z0px] w-[400px] lg:rounded-xl' src={Img} alt="nothing" />
      </div>
    </div>
  </>
    
    
  )
}

export default Hero