import React from 'react';
import { Home, MapPin, Camera, Wallet } from 'lucide-react';


export const HowItWorks = () => {
  const  steps = [
    {
      id: 1,
      title: "Collect Waste",
      description: "Gather recyclable waste from your home or surroundings",
      icon: <Home className="h-8 w-8 text-tc-green" />
    },
    {
      id: 2,
      title: "Scan or Log",
      description: "Use the app to scan or manually log your waste items",
      icon: <Camera className="h-8 w-8 text-tc-green" />
    },
    {
      id: 3,
      title: "Drop or Schedule",
      description: "Visit a drop-off point or schedule a home pickup",
      icon: <MapPin className="h-8 w-8 text-tc-green" />
    },
    {
      id: 4,
      title: "Earn Rewards",
      description: "Get points, cash rewards and redeem them",
      icon: <Wallet className="h-8 w-8 text-tc-green" />
    }
  ];

  return (
    <div className=" mb-4 mt-10">
      <h2 className="text-3xl text-start font-semibold mb-4">How TrashCash Works</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {steps.map((step) => (
          <div 
            key={step.id}
            className="border-2 rounded-md bg-white shadow-md flex flex-col items-center py-4"
          >
            <div className="bg-tc-green/10 rounded-full p-3 mb-2">
              {step.icon}
            </div>
            <div className="rounded-full bg-green-600 text-white w-6 h-6 flex items-center justify-center text-xs font-bold mb-2">
              {step.id}
            </div>
            <h3 className="font-medium text-center mb-1">{step.title}</h3>
            <p className="text-xs text-center text-gray-600 px-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};