import React, { useContext, useState } from "react";
import { FaUpload, FaMapMarkerAlt } from "react-icons/fa";

import { toast } from "react-toastify";

import AllUserReports from "./AllUserReports";
import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext";

const ReportTrash = () => {

  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [selectedImage, setSelectedImage] = useState('')
  const [trashReportData, setTrashReportData] = useState({
    name: "", address: "", description: "", city: "", state: "", zip: ""
  })
  const { logedInUser } = useContext(FirebaseAuthContext);


  const handleImageChange = (e) => {
    const image = e.target.files[0]
    console.log("image :", image)
    setSelectedImage(image)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTrashReportData((prev) => ({ ...prev, [name]: value }))
    console.log("trashReportData :", trashReportData)
  }


  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  const handleManualLocationChange = (e) => {
    const { name, value } = e.target;
    setLocation((prev) => ({ ...prev, [name]: value }));
  };



  const handleTrashReportSubmission = () => {

    const { name, address, description, city, state, zip } = trashReportData
    if (name || selectedImage || address || description || city || state || zip) {


      const formData = new FormData()
      formData.append('trashimage', selectedImage)
      formData.append('name', name)
      formData.append('latitude', location.lat)
      formData.append('longitude', location.lng)
      formData.append('address', address)
      formData.append('description', description)
      formData.append('city', city)
      formData.append('state', state)
      formData.append('zip', zip)
      formData.append("userAuthId", logedInUser.uid);
      console.log("formData :", formData)


      // Make an API call to upload the image
      fetch(`${import.meta.env.VITE_SERVER_URL}/api/trash/report`, {
        method: 'POST',

        body: formData,
      })
        .then((response) => {

          if (response.ok) {
            toast.success("Trash reported successfully")
          }

        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error("Error reporting trash")
        });
    } else {

      toast.error("Please fill all the fields");

    }



  }







  const handleSubmit = (e) => {
    e.preventDefault();

    handleTrashReportSubmission();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      <section className="bg-green-600 text-white py-16 px-6 text-center rounded-xl mb-10 shadow">
        <h1 className="text-4xl font-bold mb-2">Report Trash</h1>
        <p className="text-lg">Help us keep the city clean by reporting trash near you.</p>
      </section>

      <div className="bg-white rounded-xl shadow-md max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <label className="block text-lg font-medium mb-2">Upload Trash Image</label>

            <div id='thumbaniImage' className='w-full h-[150px] rounded-xl bg-[var(--secondary-color)] flex justify-center items-center  text-xl text-[rgba(0,0,0,0.6)] cursor-pointer relative border-[var(--primary-color)] border-2'>
              <input name={'imageUrl'} onChange={ handleImageChange 
              } className='absolute h-full w-full opacity-0 z-40' type='file' />



              {
                selectedImage ? <img className='h-full' src={URL.createObjectURL(selectedImage)} /> : <i className="fa-regular fa-images  text-[rgba(0,0,0,0.5)]"></i>
              }

            </div>

          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Description</label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Describe the trash or its location..."

              onChange={handleInputChange}
              name="description"
              rows={4}
              required
            ></textarea>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <button
              type="button"
              onClick={fetchLocation}
              className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 mx-auto"
            >
              <FaMapMarkerAlt /> Use Current Location
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="lat"
              value={location.lat}
              onChange={handleManualLocationChange}
              placeholder="Latitude"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="lng"
              value={location.lng}
              onChange={handleManualLocationChange}
              placeholder="Longitude"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="name"
              value={trashReportData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="border border-gray-300 p-2 rounded col-span-2"
              required
            />
            <input
              type="text"
              name="address"
              value={trashReportData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="border border-gray-300 p-2 rounded col-span-2"
              required
            />
            <input
              type="text"
              name="city"
              value={trashReportData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="state"
              value={trashReportData.state}
              onChange={handleInputChange}
              placeholder="State"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="zip"
              value={trashReportData.zip}
              onChange={handleInputChange}
              placeholder="Zip Code"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div className="text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition"
            >
              <FaUpload className="inline mr-2" /> Submit Report
            </button>
          </div>
        </div>
      </div>

      <AllUserReports />
    </div>
  );
};

export default ReportTrash;
