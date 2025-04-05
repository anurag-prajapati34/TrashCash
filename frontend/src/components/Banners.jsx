import React from 'react'
import banner1 from '../assets/images/bins.jpg'
const Banners = () => {
    return (
        <div className='flex justify-between items-center py-4 gap-10'>

            <div style={{ backgroundImage: `url(${banner1})` }} className='flex-1 h-[300px] '>

            </div>
            <div style={{ backgroundImage: `url(${banner1})` }} className='flex-1 h-[300px] '>

            </div>

        </div>
    )
}

export default Banners