import React from 'react'

const Navbar = () => {
    return (
        <div className='text-slate-900 max-h-[150px] max-w-[1200px] mx-auto flex justify-between items-center text-center lg:mt-10'>
            <div className='flex flex-col items-center justify-betweem mx-auto'>
                <div className='py-4'>   
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-700 sm:text-3xl sm:leading-none md:text-4xl">
                        Welcome to
                    </h2>
                    <h2 className="text-5xl font-extrabold leading-10 tracking-tight text-gray-800 sm:leading-none md:text-6xl bg-gradient-to-r from-lime-500 to-green-300 inline-block text-transparent bg-clip-text">
                        ACCAD'S APARTMENT
                    </h2>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar