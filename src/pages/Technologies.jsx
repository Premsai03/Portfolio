import React from 'react'
import htmlImg from '../images/html.png'
import cssImg from '../images/css.png'
import jsImg from '../images/js.png'
import reactImg from '../images/react.png'
import tailwindImg from '../images/tailwind-css.png'
import gitImg from '../images/git.png'
import figmaImg from '../images/figma.png'
import webflowImg from '../images/webflow.png'


const Technologies = () => {

  return (
    <>
      <div id='technologies' className='w-full'>
        <div className='flex flex-wrap items-center justify-center gap-10 pt-12 lg:pt-20'>
          <img className='h-12 lg:h-12' src={htmlImg} alt="html" />
          <img className='h-12 lg:h-12' src={cssImg} alt="css" />
          <img className='h-12 lg:h-12' src={jsImg} alt="javascript" />
          <img className='h-12 lg:h-12' src={reactImg} alt="react" />
          <img className='h-9 lg:h-19' src={tailwindImg} alt="tailwind" />
          <img className='h-12 lg:h-12' src={gitImg} alt="git" />
          <img className='h-12 lg:h-12' src={webflowImg} alt="webflow" />
          <img className='h-12 lg:h-12' src={figmaImg} alt="figma" />
        </div>
      </div>
    </>
    
        
  )
}

export default Technologies