import React from 'react'
import Image from 'next/image'
import icon from '../public/images/img1.jpeg'

const section1 = () => {
  return (
    <section className='py-16'>
    <div className='container mx-auto md:px-20'>
    <h1 className='font-bold text-center text-4xl pb-12'>Trending</h1>
    <Slide/>
    </div>
    </section>
  )
}

function Slide(){
    return (
        <div className='grid md:grid-cols-2'>
         <div className='image'>
         <Image  src={icon} width={600} height={600}/>
         </div>
         <div className='info'>
         </div>
        </div>
    )
}

export default section1
