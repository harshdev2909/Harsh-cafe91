import React, { useState } from "react";
import BgImage from '../../assets/bg-slate.png'
import CoffeeMain from '../../assets/black.png'
import Navbar from "../Navbar/Navbar";
import {motion} from 'framer-motion'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

}
const Hero = () => {
  const[sideBar,setSidebar] = useState(false)
  return <main style={bgImage}>
    <section className="relative min-h-[750px] w-full">
      <div className="container">
        <Navbar sideBar={sideBar} setSidebar={setSidebar} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
          <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
            <motion.h1 initial={{opacity:0 ,y:-100}} animate={{opacity:1 , y:0}}
              transition={{type:"spring",stiffness:100,damping:10 , delay:0.8}}
            className="text-7xl font-bold leading-tight ml-14">Blvck Tumbler</motion.h1>
            <motion.div
              initial={{opacity:0 ,y:-100}} animate={{opacity:1 , y:0}}
              transition={{type:"spring",stiffness:100,damping:10 , delay:1.2}}
            className="relative ">
              <div className="relative z-10 space-y-4">
                <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                <h1 className="text-sm opacity-55 leading-loose ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus possimus asperiores natus nostrum nam tenetur, aliquam eaque earum hic amet iste nihil magni molestiae quaerat sint labore officiis perspiciatis nulla.
                </h1>
              </div>
              <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25">

              </div>
            </motion.div>
          </div>
          {/* {Hero Image} */}
          <div className="relative"
            initial={{opacity:0 ,y:-100}} animate={{opacity:1 , y:0}}
            transition={{type:"spring",stiffness:100,damping:10 , delay:1.5}}
          >
            <motion.img 
            initial={{opacity:0 ,y:-100}} animate={{opacity:1 , y:0}}
            transition={{type:"spring",stiffness:100,damping:10 , delay:1.5}}
            src={CoffeeMain} className="relative z-40 h-[400px] md:h-[700px] img-shadow "/>
            {/* {orange circle ring} */}
            <motion.div 
            initial={{opacity:0 ,y:100}} animate={{opacity:1 , y:0}}
            transition={{type:"spring",stiffness:100,damping:10 , delay:0.8}}
            className=" h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full border-[20px]
              z-10  ">
            </motion.div>
            <div className="absolute -top-20 left-[200px] z-[1] ">
            <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leadig-none ">
              Blavk Tumber
            </h1>
            </div>
          </div>
        </div>
      </div>
      {/* {sideBar menu} */}
      {
        sideBar && (
          <div className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10 ">
        <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col gap-6 text-white">
             <div className="w-[1px] h-[70px] bg-white ">
             </div>
              {/* social icon */}
              <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
              <FaFacebook className="text-2xl "/>
              </div>
              <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
              <FaTwitter className="text-2xl"/>
              </div>
              <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
              <FaInstagram className="text-2xl"/>
              </div>
             <div className="w-[1px] h-[70px] bg-white ">

             </div>
        </div>
      </div>
      </div>
        )
      }
      
    </section>
  </main>
};

export default Hero;
