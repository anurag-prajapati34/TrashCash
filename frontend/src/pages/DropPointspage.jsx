import React, { useState } from "react";
import pickup from '../assets/images/p1.jpg'
const locations = [
  {
    name: "Central Park Recycling Center",
    address: "5th Ave & 59th St, New York, NY 10018",
    hours: "8:00 AM - 6:00 PM",
    items: ["Plastic", "Paper", "Metal"],
    points: 50,
    locationImage:pickup
  },
  {
    name: "Downtown Collection Point",
    address: "123 Main St, New York, NY 10001",
    hours: "9:00 AM - 3:00 PM",
    items: ["Plastic", "Paper", "Electronic"],
    points: 75,
    locationImage:pickup
  },
  {
    name: "Riverside Recycling",
    address: "456 River Rd, New York, NY 10024",
    hours: "7:00 AM - 7:00 PM",
    items: ["Metal", "Organic"],
    points: 80,
    locationImage:pickup
  },
  {
    name: "Community Garden Compost",
    address: "789 Green St, New York, NY 10032",
    hours: "10:30 AM - 4:00 PM",
    items: ["Organic"],
    points: 40,
    locationImage:pickup
  },
  {
    name: "Tech Recycling Center",
    address: "321 Digital Ave, New York, NY 10011",
    hours: "9:00 AM - 5:00 PM",
    items: ["Electronic", "Appliance"],
    points: 80,
    locationImage:pickup
  },
];

export default function DropPointspage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Items");

  const filteredLocations = locations.filter((location) =>
    (filter === "All Items" || location.items.includes(filter)) &&
    location.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Drop & Win</h1>
      <p className="text-center text-gray-600 mb-6">
        Find drop-off points near you, deposit trash, and earn rewards!
      </p>

      {/* Map Placeholder */}
      <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center">
        <p className="text-gray-500">Interactive map will be displayed here</p>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search by location or zip code"
          className="w-full p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All Items</option>
          <option>Plastic</option>
          <option>Paper</option>
          <option>Metal</option>
          <option>Organic</option>
          <option>Electronic</option>
          <option>Appliance</option>
        </select>
        <button className="bg-black text-white px-4 py-2 rounded">Search</button>
      </div>

      {/* Location Cards */}
      <div className="flex flex-col gap-5">
        {filteredLocations.map((location, index) => (
          <div key={index} className="bg-white shadow-md flex gap-5" >

            <div style={{ backgroundImage: `url(${location.locationImage})` , backgroundPosition:'center',backgroundSize:'cover' }} key={index} className="bg-[#F2F2F2] w-1/3 sm:h-[250px] h-[200px] flex flex-col gap-4 items-center justify-center p-4 rounded-lg shadow-md">


            </div>
            <div key={index} className="flex flex-col items-start p-4 rounded text-start">
              <h2 className="text-lg font-bold">{location.name}</h2>
              <p className="text-gray-600">{location.address}</p>
              <p className="text-sm mt-2">Hours: <strong>{location.hours}</strong></p>
              <p className="text-sm">Accepted Items: {location.items.join(", ")}</p>
              <p className="font-bold mt-2">{location.points} points per drop-off</p>
              <div className="flex gap-5 justify-center">
                <button className="mt-2 bg-gray-800 text-white px-3 py-1 rounded">Drop Here</button>
                <button className="mt-2 border-2 border-gray-800 text-black px-3 py-1 rounded">Directions</button>

              </div>
            </div>





          </div>
        ))}
      </div>

      {/* Suggest Location */}
      <div className="text-center mt-6">
        <p>Don't see a location near you?</p>
        <button className="bg-black text-white px-4 py-2 rounded mt-2">Suggest Location</button>
      </div>
    </div>
  );
}