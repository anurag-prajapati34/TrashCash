import { Camera } from 'lucide-react';
import React from 'react'
import { useState } from 'react';

const TrashReportPage = () => {
    const [selectedImage, setSelectedImage] = useState();

    const handleImageChange = (e) => {
        const image = e.target.files[0]
        console.log("image :", image)
        setSelectedImage(image)
    }
    return (
        <div className='w-full flex justify-center gap-5 mt-5'>

            <div className='px-4 text-start w-1/2 '>
                <span className='flex items-start '><Camera/> Upload Trash Image</span>
                <p>Take a photo or upload an image of the trash you've found</p>

            <div id='thumbaniImage' className='w-[200px] h-[150px] rounded-xl bg-[var(--secondary-color)] flex justify-center items-center  text-xl text-[rgba(0,0,0,0.6)] cursor-pointer relative border-[var(--primary-color)] border-2'>
                <input onChange={handleImageChange} name={'trash'} className='absolute h-full w-full opacity-0 z-40' type='file' />



                {
                    selectedImage ? <img className='h-full' src={URL.createObjectURL(selectedImage)} /> : <i class="fa-regular fa-images  text-[rgba(0,0,0,0.5)]"></i>
                }

            </div>
            </div>


            <div className='w-1/2 '>
            <input type='text' className='w-full h-[50px] rounded-xl bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] px-4' placeholder='Location of the trash'/>
            <input type='text' className='w-full h-[50px] rounded-xl bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] px-4' placeholder='city'/>
            <input type='text' className='w-full h-[50px] rounded-xl bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] px-4' placeholder='postal code'/>



            </div>



        </div>
    )
}

export default TrashReportPage