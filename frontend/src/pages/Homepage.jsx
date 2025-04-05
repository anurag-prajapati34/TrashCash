import React from 'react'

import { FaTrash, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import HeroSection from '../components/HeroSection';
import Banners from '../components/Banners';
import { Section } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import reportTrashImage from '../assets/images/bins.jpg'
import localAreaTrashImage from '../assets/images/localareagarbage.jpg'
import pickupPointsImage from '../assets/images/pickuppoints.jpg'
import homePickupImage from '../assets/images/homepickup.jpg'
import communityCleaning from '../assets/images/community.png'
import bookPickupImage   from '../assets/images/bins.jpg'
import trackPickup   from '../assets/images/bins.jpg'
import Footer from '../components/Footer';
import { HowItWorks } from '../components/HowItWorks';

export const Homepage = () => {

  const services = [
    {
      title: "Report Trash",
      description: "Report trash in your area and help us keep the environment clean.",
      imageUrl: localAreaTrashImage,
      actionRoute: "/report"


    },
    {
      title: "Drop at pickup points",
      description: "Drop your trash at designated pickup points.",
      imageUrl: pickupPointsImage,
      actionRoute: "/drop-points"
    },
    
    {
      title: "Book Home Pickup",
      description: "Book a pickup for your trash and help us keep the environment clean.",
      imageUrl: homePickupImage
      , actionRoute: "/schedule-pickup"
    },
    {
      title: "Community driven approach",
      description: "Connect with others who care about the environment.",
      
      imageUrl: communityCleaning
      , actionRoute: "/community"
    }
  ];


  return (
    <div className='md:px-16'>

      <HeroSection />

      {/* <Banners/> */}

      <div className="bg-gray-100 min-h-screen text-gray-800 font-sans">

    

        <section className='text-start'>
          <h1 className='text-3xl font-bold'>Our Services</h1>
          <div className='mt-5 flex justify-center flex-wrap gap-5 '>
            {
              services.map((service, index) => <ServiceCard  key={index} title={service.title} description={service.description} imageUrl={service.imageUrl} actionRoute={service.actionRoute} />
              )
            }

          </div>
        </section>


   

      {/*HOw it works*/}
      <HowItWorks/>
  
      </div>





    </div>
  )
}
