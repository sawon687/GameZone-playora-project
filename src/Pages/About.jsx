import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const About = () => {

    const [titleText,SettiltleText]=useState("")
const fullText=' About Playora'

useEffect(()=>{
    let index=0
    const interval=setInterval(() => {
        SettiltleText(fullText.slice(0,index))
        index++
        if(index>fullText.length)
        {
            return clearInterval(interval)
        }
    }, 100);

    return ()=>{
        clearInterval(interval)
    }
},[])

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] via-[#141414] to-[#1c1c1c] flex flex-col items-center justify-center text-white px-6 py-12">
      <title>About</title>
      {/* Logo with animation */}
      <motion.figure
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <img
          src={logo}
          alt="Playora Logo"
          className="max-w-96 h-72 object-cover  drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        />
        <span className='flex justify-center'>PLAY EXPLORE LEVEL UP HERE</span>
      </motion.figure>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      >
        {titleText}
      </motion.h1>

      {/* Glass card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-3xl text-center shadow-lg hover:bg-white/15 transition-all duration-300"
      >
        <p className="text-lg text-gray-300 mb-5 leading-relaxed">
          🎮 <span className="font-semibold text-purple-400">Playora</span> is your ultimate
          <span className="text-pink-400"> gaming hub</span> — explore, play, and keep track of your
          favorite games effortlessly. From indie gems to AAA blockbusters, Playora helps gamers stay
          connected and updated with the latest titles and trends.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Our mission is to make gaming more fun, interactive, and personalized. 
          We combine beautiful design, fast performance, and reliable data — 
          because we believe gaming is more than a hobby, it’s a lifestyle.  
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-all"
        >
          Join Playora Now 🚀
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
