import { useState } from "react";

export default function TrashScanner() {
  const [location, setLocation] = useState("");

  const getGPSLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        },
        (error) => {
          alert("Unable to retrieve location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-5xl mx-auto">
      {/* Left Side - Trash Scanner */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold">Scan Trash in Real-Time</h2>
        <p className="text-gray-600 my-3">
          Our advanced image recognition technology helps identify the type of waste and suggests the best disposal method.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold">Trash Scanner</h3>
          <p className="text-sm text-gray-500 mb-3">Upload an image of trash or use your camera to identify the type of waste.</p>
          <div className="flex gap-3">
            <button className="bg-black text-white px-4 py-2 rounded">Upload Image</button>
            <button className="border px-4 py-2 rounded">Use Camera</button>
          </div>
        </div>
      </div>

      {/* Right Side - Share Location */}
      <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold">Share Your Location</h3>
        <p className="text-gray-600 my-3">
          Help us locate trash hotspots by sharing your location or providing details about where you found the waste.
        </p>
        <input
          type="text"
          placeholder="Enter location or use GPS"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <button onClick={getGPSLocation} className="border px-4 py-2 rounded mb-3">📍 GPS</button>
        <textarea
          placeholder="Describe the trash location (e.g., behind the park bench)"
          className="w-full p-2 border rounded mb-3"
        />
        <button className="bg-black text-white w-full p-3 rounded">Submit Location</button>
      </div>
    </div>
  );
}