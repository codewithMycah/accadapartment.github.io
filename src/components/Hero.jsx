import React from 'react'

const Hero = () => {
  return (
    <div className='relative flex flex-col items-center px-12 md:px-8 max-w-[1200px] mx-auto md:flex-row'>
        <div className="flex py-4  md:pb-8 md:pt-6 md:pr-8">
            <p className="text-left max-w-lg mx-auto text-base text-gray-700 md:mt-5 md:text-lg md:max-w-3xl">
            Designed exclusively for <span className='font-semibold text-green-600 underline text-xl'>WOMEN</span>, our dormitory offers a safe, supportive, and inspiring environment to live, learn, and grow. Nestled in a tranquil setting, <em>Accad's Apartmen</em>t features modern amenities, spacious rooms, and a vibrant community to make you feel at home. 
            </p>
        </div>
        <div className="flex py-4 text-center">
            <h2 className="text-8xl font-extrabold text-gray-800 sm:leading-none md:text-9xl bg-gradient-to-r from-green-300 to-lime-500 inline-block text-transparent bg-clip-text">SOON TO OPEN!</h2>
        </div>
    </div>
  )
}

export default Hero