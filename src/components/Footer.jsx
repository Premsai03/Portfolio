import React from 'react'

const Footer = () => {

  return (
    <div className='h-56 w-full flex flex-col justify-between bg-primary-text-color px-4 lg:px-10 lg:mt-32'>
        <div className='flex  items-center gap-4 lg:gap-5'>
            <button className='lg:w-36 w-32 font-wixMadeforText lg:text-6xl text-[40px] outline-none bg-transparent text-third-text-color rounded-full border border-third-text-color lg:mt-10 mt-6 hover:text-primary-text-color hover:bg-third-text-color duration-300'><a href="https://github.com/Premsai03" target='_blank' rel='noreferrer noopener'>GH</a></button>
            <button className='lg:w-36 w-32 font-wixMadeforText lg:text-6xl text-[40px] outline-none bg-transparent text-third-text-color rounded-full border border-third-text-color lg:mt-10 mt-6 hover:text-primary-text-color hover:bg-third-text-color duration-300'><a href="https://www.linkedin.com/in/premsaiel03/" target='_blank' rel='noreferrer noopener'>IN</a></button>
            <button className='lg:w-32 w-32 font-wixMadeforText lg:text-6xl text-[40px] outline-none bg-transparent text-third-text-color rounded-full border border-third-text-color lg:mt-10 mt-6 hover:text-primary-text-color hover:bg-third-text-color duration-300'><a href="https://x.com/Premsai_3" target='_blank' rel='noreferrer noopener'>X</a></button>
        </div>
        <div className='lg:flex justify-between flex items-end lg:pb-4 pb-4 text-third-text-color'>
            <div className='lg:flex lg:flex-row lg:gap-6 flex flex-col gap-2'>
                <h1 className='hover:underline cursor-pointer text-sm'>TERMS & CONDITIONS</h1>
                <h1 className='hover:underline cursor-pointer text-sm'>PRIVACY POLICY</h1>
            </div>
            <div>
                <h1>© 2024 by Premsai El</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer