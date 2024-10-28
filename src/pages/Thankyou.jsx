import React from 'react'
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div className='bg-third-text-color text-primary-text-color text-4xl mb-[274px] mt-32 pt-10 text-center font-wixMadeforDisplay font-semibold'>
        <h1>Thank you for contacting me!</h1>
        <Link to="/contact"><button className='bg-third-text-color text-primary-text-color hover:bg-primary-text-color hover:text-third-text-color duration-300 border border-primary-text-color rounded-full text-4xl mt-20 py-3 px-6 text-center mb-10 font-wixMadeforDisplay font-semibold'>Back</button></Link>
    </div>
  )
}

export default Thankyou