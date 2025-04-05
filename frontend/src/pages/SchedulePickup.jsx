import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTruck, FaCalendarAlt, FaTrashAlt } from "react-icons/fa";

const SchedulePickup = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    trashType: "",
    quantity: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scheduled Pickup:", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      <motion.section 
        className="bg-green-700 text-white py-16 px-6 text-center rounded-xl mb-10 shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-3 flex justify-center items-center gap-3">
          <FaTruck className="text-3xl" /> Schedule Trash Pickup
        </h1>
        <p className="text-lg">Book a convenient time for home trash collection</p>
      </motion.section>

      <motion.div 
        className="bg-white rounded-xl shadow-xl max-w-4xl mx-auto p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street Address"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Zip Code"
              className="border border-gray-300 p-3 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <select
              name="trashType"
              value={formData.trashType}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded"
              required
            >
              <option value="">Select Trash Type</option>
              <option value="organic">Organic</option>
              <option value="plastic">Plastic</option>
              <option value="electronic">Electronic</option>
              <option value="metal">Metal</option>
              <option value="other">Other</option>
            </select>

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity (kg)"
              className="border border-gray-300 p-3 rounded"
              required
            />

            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-gray-500 text-xl" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded w-full"
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto mt-4"
          >
            <FaTrashAlt className="text-lg" /> Book Pickup
          </motion.button>
        </form>

        <motion.img
          src="https://cdn.pixabay.com/photo/2020/03/24/20/08/recycling-4969461_1280.jpg"
          alt="Trash pickup illustration"
          className="mt-10 rounded-lg shadow-md w-full object-cover h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
};

export default SchedulePickup;
