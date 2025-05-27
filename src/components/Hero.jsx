// import { motion } from "framer-motion";
// import DevImage from "./img/DevImage.jpg";
// import WebImage from "./img/WebImage.jpg";

import DevImage from "./img/DevImage.png";
import WebImage from "./img/WebImage.png";

const Hero = ({ mode, setMode }) => {
  const isWeb = mode === "web";
  const image = isWeb ? WebImage : DevImage;
  const title = isWeb ? "Web Developer" : "Graphic Designer";
  const subtitle = isWeb
    ? "I build stylish, modern websites, web services and digital experiences for all screen sizes."
    : "I design bold visuals, clean graphics, and art that makes your brand unforgettable.";

  return (
    <section className="w-full h-screen bg-[#1e1e1e] text-white flex items-center justify-center  md:px-20">
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl justify-between gap-10">
        {/* Left - Text Content */}
        <div className="max-w-xl">
          <p className="text-lg text-white-600 mb-2">Hello, My name is</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Alupsss</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
            {title}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">{subtitle}</p>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition cursor-pointer">
              Download CV
            </button>
            <button
              onClick={() => setMode(isWeb ? "design" : "web")}
              className="px-6 py-2 border border-white rounded-lg hover:bg-white/10 transition cursor-pointer"
            >
              Switch to {isWeb ? "Graphic Designer" : "Web Developer"}
            </button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden ">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
