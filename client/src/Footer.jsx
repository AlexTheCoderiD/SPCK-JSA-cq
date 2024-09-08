import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col mb-16 items-center gap-8'>
        <div className='w-5/6 py-0.5 bg-white mb-16 mt-36'></div>
        <div className='text-base'>Copyright © 2024 devcourse.com. All rights reserved.</div>
        <button className='bg-biBlue py-1 px-4 rounded-full shadow-lg text-lg hover:bg-bidBlue'>Contact Us</button>
    </footer>
  )
}

export default Footer