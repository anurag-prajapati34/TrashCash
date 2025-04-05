import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import heroimg from '../assets/images/heroimage.png'
export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-green-100 via-white to-blue-100">
      {/* Text Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 leading-tight">
          TrashCash
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Empowering communities to report waste and keep neighborhoods clean. Snap, tag, and notify your local authorities in just a few clicks.
        </p>
        <button className="mt-6 px-6 py-3 text-lg bg-green-700 hover:bg-green-800 text-white rounded-xl">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </motion.div>

      {/* Image/Illustration */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full md:w-1/2 mb-10 md:mb-0"
      >
        <img
          src={heroimg}
          alt="SmartWaste Reporting Illustration"
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </motion.div> 
    </section>
  );
}
