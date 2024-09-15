import React from "react";
import BgImage from '../../assets/bg-slate.png'
import CoffeeMain from '../../assets/black.png'
import Navbar from "../Navbar/Navbar";
const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

}
const Hero = () => {
  return <main style={bgImage}>
    <section className="min-h-[750px] w-full">
      <div className="container">
        <Navbar/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
          <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
            <h1 className="text-7xl font-bold leading-tight ml-14">Blvck Tumbler</h1>
            <div className="relative ">
              <div className="relative z-10 space-y-4">
                <h1 className="text-sm opacity-55 leading-loose ">Black Lifestyle Lovers</h1>
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus possimus asperiores natus nostrum nam tenetur, aliquam eaque earum hic amet iste nihil magni molestiae quaerat sint labore officiis perspiciatis nulla.
                </h1>
              </div>
              <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25">

              </div>
            </div>
          </div>
          {/* {Hero Image} */}
          <div className="relative">
            <img src={CoffeeMain} className="relative z-40 h-[400px] md:h-[700px] img-shadow "/>
            {/* {orange circle ring} */}
            <div className=" h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full border-[20px]
              z-10  ">
            </div>
            <div className="absolute -top-20 left-[200px] z-[1] ">
            <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leadig-none ">
              Blavk Tumber
            </h1>
            </div>
          </div>
          <div></div>
          {/* {third div} */}
         
          <div></div>
        </div>
      </div>
    </section>
  </main>
};

export default Hero;
