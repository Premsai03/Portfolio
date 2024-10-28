import React from 'react'
import {PROJECTS} from '../constants'
import Image1 from '../projects/project-1.jpg';
import Image2 from '../projects/project-2.jpg';
import Image3 from '../projects/project-3.jpg';
import Image4 from '../projects/project-4.jpg';
import Image5 from '../projects/project-5.jpg';
import Image6 from '../projects/project-6.jpg';


const Projects = () => {

  return (
    <div id='projects' className='lg:mt-20 mt-10 w-full mb-10'>
        <h1 className='text-black font-wixMadeforDisplay pt-20 text-8xl lg:pt-16'>projects</h1>
        <div className='flex gap-3 flex-wrap mt-7'>
            <div className='w-full md:w-[calc(50%-0.375rem)] lg:w-[calc(50%-0.375rem)] lg:h-[440px] mb-10'>
              <a href={PROJECTS[0].url} target='_blank' rel='noreferrer noopener'>
                <img className='w-full h-full lg:hover:scale-ninety lg:hover:rounded-[60px] hover:rounded-[30px] transition-all ease-in-out duration-500' src={Image1} alt="" />
              </a>
              <p className='font-wixMadeforText text-base mt-3'>E-Commerce website</p>
            </div>
            <div className='w-full md:w-[calc(50%-0.375rem)] lg:w-[calc(50%-0.375rem)] lg:h-[440px] mb-10'>
              <a href={PROJECTS[1].url} target='_blank' rel='noreferrer noopener'>
                <img className='w-full h-full lg:hover:scale-ninety lg:hover:rounded-[60px] hover:rounded-[30px] transition-all ease-in-out duration-500' src={Image2} alt="" />
              </a>
              <p className='font-wixMadeforText text-base mt-3'>Password generator</p>
            </div>
            <div className='w-full md:w-[calc(50%-0.375rem)] lg:w-[calc(50%-0.375rem)] lg:h-[440px] mb-10'>
              <a href={PROJECTS[2].url} target='_blank' rel='noreferrer noopener'>
                <img className='w-full h-full lg:hover:scale-ninety lg:hover:rounded-[60px] hover:rounded-[30px] transition-all ease-in-out duration-500' src={Image3} alt="" />
              </a>
              <p className='font-wixMadeforText text-base mt-3'>Portfolio website</p>
            </div>
            <div className='w-full md:w-[calc(50%-0.375rem)] lg:w-[calc(50%-0.375rem)] lg:h-[440px] mb-10'>
              <a href={PROJECTS[3].url} target='_blank' rel='noreferrer noopener'>
                <img className='w-full h-full lg:hover:scale-ninety lg:hover:rounded-[60px] hover:rounded-[30px] transition-all ease-in-out duration-500' src={Image4} alt="" />
              </a>
              <p className='font-wixMadeforText text-base mt-3'>Tesla UI clone</p>
            </div>
            <div className='w-full md:w-[calc(50%-0.375rem)] lg:w-[calc(50%-0.375rem)] lg:h-[440px] mb-10'>
              <a href={PROJECTS[4].url} target='_blank' rel='noreferrer noopener'>
                <img className='w-full h-full lg:hover:scale-ninety lg:hover:rounded-[60px] hover:rounded-[30px] transition-all ease-in-out duration-500' src={Image5} alt="" />
              </a>
              <p className='font-wixMadeforText text-base mt-3'>Weather info</p>
            </div>
            <div className='w-full md:w-[calc(50%-0.375rem)] lg:w-[calc(50%-0.375rem)] lg:h-[440px] mb-10'>
              <a href={PROJECTS[5].url} target='_blank' rel='noreferrer noopener'>
                <img className='w-full h-full lg:hover:scale-ninety lg:hover:rounded-[60px] hover:rounded-[30px] transition-all ease-in-out duration-500' src={Image6} alt="" />
              </a>
              <p className='font-wixMadeforText text-base mt-3'>Blog website</p>
            </div>
        </div>
    </div>
  )
}

export default Projects