import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full border border-black mt-28 mb-20 px-2 rounded-3xl lg:rounded-[50px] pb-14 lg:mt-28 lg:pb-14 lg:px-6'>
      <form action="https://api.web3forms.com/submit" method="POST">
        <h1 className='text-black font-wixMadeforDisplay pt-6 text-8xl lg:pt-16'>contact</h1>
        <input type="hidden" name="access_key" value="5838d4bb-7abf-4380-b418-84ea57dff1a6"></input>
        <input type="hidden" name="redirect" value="https:/premsaiel.netlify.app/thankyou"></input>
        <input type="text" name="name" placeholder='name' required className='w-full font-wixMadeforText text-xl outline-none bg-transparent text-gray-500 lg:rounded-3xl rounded-full border border-black mt-10 p-4' />
        <input type="email" name="email" placeholder='email@example.com' required className='w-full font-wixMadeforText text-xl outline-none bg-transparent text-gray-500 lg:rounded-3xl rounded-full border border-black mt-10 p-4' />
        <textarea required rows={2} className='w-full font-wixMadeforText text-xl outline-none bg-transparent text-gray-500 rounded-3xl border border-black mt-10 p-4' name="message" placeholder='message'></textarea>
        <button className='lg:w-72 w-full font-wixMadeforDisplay font-semibold text-3xl outline-none bg-transparent text-primary-text-color rounded-full border border-primary-text-color mt-10 p-4 hover:bg-primary-text-color hover:text-third-text-color duration-300'>SUBMIT</button>
      </form>
    </div>  
  )
}

export default Contact



