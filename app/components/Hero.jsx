"use client"
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Image from 'next/image'
import Profile from "../../public/assets/myimage3.png"
import Button from './ui/Button'
import { CiLinkedin  } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='pb-20 pt-32 relative '>
      
        <Spotlight fill="white" className="absolute -top-40 left-0 opacity-50 w-[80vw]" />
        <Spotlight fill="blue" className="absolute top-12 left-4 opacity-150" />


        <Spotlight fill="purple" className="md:top-28 md:-right-28 md:opacity-100 md:w-[30%] md:transform md:rotate-90" />

<div className='grid grid-cols-2 gap-4' >
<div className="col-span-6 xl:col-span-1 mt-20">
<TextGenerateEffect
className="text-2xl md:text-3xl xl:text-4xl xl:text-start text-center"
words="I Am NAHIAN RAFI"
/>
<TextGenerateEffect
className="text-2xl md:text-3xl xl:text-4xl text-center xl:text-start"
words="-FRONTEND DEVELOPER"
/>
<TextGenerateEffect
className="text-base  xl:text-2xl text-center xl:text-start"
words="Experience Seamlessness with Next.js Through My Work"
/>

<div className='pt-10 flex justify-center xl:justify-normal gap-x-5'>
   <Button>
 
 <Link href="  https://www.linkedin.com/in/nahian-rafi-1bb15a34a/" target="_blank">  <CiLinkedin  className='text-2xl' /></Link>
   </Button>
   <Button>
<Link href="https://github.com/mdnahianrafi" target="_blank">   <FaGithub  className='text-2xl' /></Link>
   </Button>
   <Button>
<Link href=">https://www.fiverr.com/users/nahian_rafi/seller_dashboard" target="_blank">   <TbBrandFiverr   className='text-2xl' /></Link>
   </Button>
</div>
<div className='pt-10 flex justify-center xl:justify-normal gap-x-5'>
<Button>
<Link href="https://drive.google.com/file/d/1D6kqRtMbqJKOgY_eqoSPPrCMaW4ZqMHu/view?usp=sharing" target="_blank">
<div className='px-10 flex gap-x-4'>
    <h2>My Resume</h2>
    <IoCloudDownloadOutline className='text-2xl'/>
</div>
</Link>
   </Button>

</div>

</div>




<div className="mt-10 col-span-6 xl:col-span-1 grid place-items-center hover:border rounded-3xl  transform rotate-3 hover:border-violet-500 hover:transform hover:rotate-0 hover:transition-all hover:ease-in-out hover:duration-300">
<Image src={Profile}
alt='myimage.png'
width={700}
height={700}

loading='lazy'
/>
</div>

</div>
        
        </div>
  )
}

export default Hero