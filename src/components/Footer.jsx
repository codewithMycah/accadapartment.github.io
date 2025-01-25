import React from 'react'
import MACreativeslogo from '../assets/MACreativeslogo.png'

const Footer = () => {
  return (
    <div className='text-slate-900 h-fit max-w-[1200px] mx-auto flex justify-between items-center text-center py-8'>
      <div className='flex flex-col items-center justify-betweem mx-auto'>
        <img src={ MACreativeslogo } alt="MACreatives Logo" className='max-h-8'/>
        <h3 className='text-sm'>Created by M.Accad</h3>
      </div>
      
    </div>
  )
}

export default Footer
