import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-10 flex items-center place-content-between ml-2 mr-2 bg-[#ee9c30] text-white'>
        <div>My PortFolio</div>
        <div className='flex gap-2'>
            <p>Home</p>
            <p>project</p>
            <p>about</p>
        </div>
    </nav>
  )
}

export default Navbar
