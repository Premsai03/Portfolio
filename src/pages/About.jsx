import React from 'react'
import Technologies from './Technologies'

const About = () => {
  return (
    <>
    <div id='about' className='lg:h-full mb-20 lg:mt-28'>
      <div className='w-full border border-black mt-28 px-6 rounded-3xl lg:rounded-[50px]  pb-8 lg:mt-16 lg:pb-14 lg:px-6'>
        <h1 className='text-black font-wixMadeforDisplay lg:pl-5 pt-6 text-6xl lg:pt-16'>About</h1>
        <p className='text-black font-wixMadeforText text-xl pt-8 lg:px-6'>
          I am a dedicated and versatile frontend developer and a web designer with a passion for creating efficient and user-friendly web applications and designing beautiful user interfaces. I have worked with a variety of technologies, including Vanilla JavaScript and libraries like React.js, Tailwind CSS and no-code platforms like Figma and Webflow. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy staying active, exploring new technologies.
        </p>
        <Technologies />
      </div>
    </div>
    </>
    
  )
}

export default About