import React from 'react'

import { companies, testimonials } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'

const Testimonial = () => {
  return (
<section id='testimonials'>
<div className="py-40" >
        <h1 className="heading py-5">
    Kind words from {' '}<span className="text-purple">satisfied clients</span>
    </h1>
<div className="py-10">
<InfiniteMovingCards
items={testimonials}
direction='right'
speed="slow"
/>
</div>


    </div>
</section>
  )
}

export default Testimonial