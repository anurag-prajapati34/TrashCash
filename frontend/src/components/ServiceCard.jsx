import React from 'react'
import { useNavigate } from 'react-router-dom';


const ServiceCard = ({ title, description, imageUrl, actionRoute }) => {
  const navigate = useNavigate();
  return (

    <div className=' w-[200px] sm:w-[300px]  text-start  bg-white rounded-lg shadow-md flex flex-col gap-4   p-4'>


      <div style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='bg-[#F2F2F2] w-full sm:h-[250px] h-[200px] flex flex-col gap-4 items-center justify-center p-4 rounded-lg shadow-md'>

      </div>

      <h1 className='text-xl font-semibold'>{title}</h1>
      <p className='text-start'>{description}</p>
      <button onClick={() => navigate(actionRoute)} className='px-2 py-1 border-2 border-black bg-black text-white rounded-md'>Learn More</button>

    </div>

  )
}

export default ServiceCard