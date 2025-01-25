import React from 'react'
import GoogleMap from './GoogleMap'

const Location = () => {
  return (
    <div className='px-12 md:px-8 max-w-[1200px] mx-auto'>
      <div className='px-6 py-4 rounded-lg border-green-300 border-2 max-w-3xl text-center mx-auto mt-4 mb-4'>
        <h1>Location: Alley J, Caritan Centro, Tuguegarao City, Cagayan, 3500</h1>
      </div>
      <GoogleMap></GoogleMap>
    </div>
  )
}

export default Location