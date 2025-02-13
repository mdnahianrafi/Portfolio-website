import React from 'react'
import { BentoGrid, BentoGridItem} from './ui/BentoGrid'
import { gridItems } from '@/data'


const Grid = () => {
  return (
   <section id='about' className='pt-10 pb-28'>
<div className='flex justify-center py-20 gap-x-2'>
 <h1 className="heading ">About my <span className='text-purple'>current objectives</span></h1>
</div>
    <BentoGrid className="">
    {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
  <BentoGridItem
    key={id}  // Ensure `key` is unique
    id={id}
    title={title}
    description={description}
    className={className}
    imgClassName={imgClassName} 
    titleClassName={titleClassName}
    img={img}
    spareImg={spareImg}
  />
))}
    </BentoGrid>
   </section>
  )
}

export default Grid