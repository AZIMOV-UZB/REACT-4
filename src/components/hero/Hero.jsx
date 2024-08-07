import React from 'react'
import hero from '/hero-1.webp'
import img from '/hero-2.webp'
import foto from '/hero-3.webp'
import rasm from '/hero-4.webp'
import bg from '/hero-5.webp'
import lg from '/hero-6.webp'
import blag from '/hero-7.webp'



export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__wrapper  flex overflow-auto	contaner'>
            <img className='w-2/4 h-80	' src={hero} alt="foto" />
            <img className='w-2/4 h-80	' src={img} alt="foto" />
            <img className='w-2/4 h-80	' src={bg} alt="foto" />
            <img className='w-2/4 h-80	' src={foto} alt="foto" />
            <img className='w-2/4 h-80	' src={rasm} alt="foto" />
            <img className='w-2/4 h-80	' src={blag} alt="foto" />
            <img className='w-2/4 h-80	' src={lg} alt="foto" />
         
        </div>
    </div>
  )
}
