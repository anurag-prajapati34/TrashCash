import React, { useState } from "react";
import { FaUpload, FaMapMarkerAlt } from "react-icons/fa";
import { ImageInput } from "../components/ImageInput/ImageInput";

const ReportTrash = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({ name: "", address: "", city: "", state: "", zip: "" });

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

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

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trash Report Submitted", { image, location, description, ...formData });
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
            {/* <input type="file" onChange={handleImageUpload} className="w-full" required /> */}
            <ImageInput/>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Description</label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="Describe the trash or its location..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={formData.name}
              onChange={handleFormDataChange}
              placeholder="Full Name"
              className="border border-gray-300 p-2 rounded col-span-2"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFormDataChange}
              placeholder="Address"
              className="border border-gray-300 p-2 rounded col-span-2"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleFormDataChange}
              placeholder="City"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleFormDataChange}
              placeholder="State"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleFormDataChange}
              placeholder="Zip Code"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition"
            >
              <FaUpload className="inline mr-2" /> Submit Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTrash;
