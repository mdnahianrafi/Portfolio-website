import React from 'react'
import Button from './ui/Button'

const GetInTouch = () => {
  return (
<section id='contact'>
<div className="">
    <h1 className='heading'>
 Ready to take {' '} <span className='text-purple'>your</span> digital presence to the next level?

    </h1>

    <p className='text-center font-sans py-10 text-base text-[#C1C2D3]'>
        Reach out to me today and let's discuss how i can help you achieve your goals.
    </p>
<div className="flex justify-center py-10">
        <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
   Let's Get In Touch
  </div>
</button>
</div>


<div className="flex jsutify-between">

<div>
<p className="text-xl py-5">
        Developed By Nahian Rafi
    </p>
</div>


</div>
      </div>
</section>
  )
}

export default GetInTouch