import { Camera } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast'
const TrashReportPage = () => {
    const [selectedImage, setSelectedImage] = useState();

    const [trashReportData, setTrashReportData] = useState({
        name: "", imageUrl: "", address: "", description: "", city: "", state: "", zip: ""
    })

    const handleImageChange = (e) => {
        const image = e.target.files[0]
        console.log("image :", image)
        setSelectedImage(image)
    }


    const handleImageUpload = () => {

        const { name, imageUrl, address, description, city, state, zip } = trashReportData
        if (name || imageUrl || address || description || city || state || zip) {


            const formData = new FormData()
            formData.append('trashimage', selectedImage)
            formData.append('name', name)

            formData.append('address', address)
            formData.append('description', description)
            formData.append('city', city)
            formData.append('state', state)
            formData.append('zip', zip)
            console.log("formData :", formData)


            // Make an API call to upload the image
            fetch('http://localhost:5000/api/trash/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    toast.success("Successfully reported trash")
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {

            toast.error("Please fill all the fields");

        }



    }


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setTrashReportData((prev) => ({ ...prev, [name]: value }))
        console.log("trashReportData :", trashReportData)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        handleImageUpload()
    }
    return (
        <div className='w-full flex justify-center gap-5 mt-5'>

            <div className='px-4 text-start w-1/2 '>
                <span className='flex items-start '><Camera /> Upload Trash Image</span>
                <p>Take a photo or upload an image of the trash you've found</p>

                <div id='thumbaniImage' className='w-[200px] h-[150px] rounded-xl bg-[var(--secondary-color)] flex justify-center items-center  text-xl text-[rgba(0,0,0,0.6)] cursor-pointer relative border-[var(--primary-color)] border-2'>
                    <input  onChange={handleInputChange} name={'trash'} className='absolute h-full w-full opacity-0 z-40' type='file' />



                    {
                        trashReportData.imageUrl ? <img className='h-full' src={URL.createObjectURL(trashReportData.imageUrl)} /> : <i class="fa-regular fa-images  text-[rgba(0,0,0,0.5)]"></i>
                    }

                </div>
            </div>


            <form onSubmit={handleSubmit} className='w-1/2 '>
                <input type='text' onChange={handleInputChange} className='w-full h-[50px] rounded-xl bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] px-4' name='name' placeholder='Name' />
                <input type='text' onChange={handleInputChange} className='w-full h-[50px] rounded-xl bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] px-4' name='address' placeholder='Address' />
                <input type='text' onChange={handleInputChange} className='w-full h-[50px] rounded-xl bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] px-4' name='city' placeholder='City' />
                <input type='text' onChange={handleInputChange} className='w-full h-[50px] rounded-xl bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] px-4' name='state' placeholder='State' />
                <input type='text' onChange={handleInputChange} className='w-full h-[50px] rounded-xl bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] px-4' name='zip' placeholder='zip' />

<button>Submit</button>

            </form>



        </div>
    )
}

export default TrashReportPage