import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaPeopleCarry, FaHandsHelping } from "react-icons/fa";
import communityImage from "../assets/images/communityEventImage2.jpeg";
const Community = () => {
  return (
    <div className="bg-green-50 min-h-screen p-6 font-sans">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 bg-green-700 text-white rounded-xl shadow mb-10"
      >
        <h1 className="text-4xl font-bold mb-3">Join the Clean Earth Movement</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Be a part of our community initiatives focused on environmental cleanliness, awareness, and collaboration to make a better tomorrow.
        </p>
      </motion.section>

      {/* Info Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[{
          icon: <FaPeopleCarry className="text-4xl text-green-700" />, 
          title: "Volunteer Drives", 
          text: "Participate in local cleanup events and help restore nature in your community."
        }, {
          icon: <FaLeaf className="text-4xl text-green-700" />, 
          title: "Green Education", 
          text: "Learn how small lifestyle changes can reduce waste and promote sustainability."
        }, {
          icon: <FaHandsHelping className="text-4xl text-green-700" />, 
          title: "Connect & Contribute", 
          text: "Join like-minded individuals working together for a cleaner planet."
        }].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Drives Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
          Upcoming Cleanliness Drives
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[{
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
            title: "Beach Cleanup Drive",
            date: "April 14, 2025",
            location: "Mumbai, Juhu Beach"
          }, {
            image: communityImage,
            title: "Park Restoration Day",
            date: "April 21, 2025",
            location: "Delhi, Green Valley Park"
          }].map((drive, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img src={drive.image} alt="event" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{drive.title}</h3>
                <p className="text-sm text-gray-600 mb-1">📍 {drive.location}</p>
                <p className="text-sm text-gray-600">📅 {drive.date}</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Community;
