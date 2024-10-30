import React from "react";
import BannerImg from "../../assets/BannerImg.png";
import Splash from "../../assets/Splash.png";
import { motion } from "framer-motion";
import { fadeUp } from "../Products/Products";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import "./Banner.css"
const Banner = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container motionlemon grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12 relative">
        {/* Banner Image section */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={BannerImg}
            alt=""
            className="w-[300px] md:w-[600px] mx-auto relative z-10 pb-10"
          />
          <motion.img
            initial={{ opacity: 0, y: -100, rotate: -180, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={Splash}
            alt=""
            className="absolute lemonmotion  z-0"
          />
        </div>
        {/* Banner Text info section */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px] mb-5">
            <motion.h1
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="show"
              className="text-3xl lg:text-4xl font-semibold "
            >
              Refresh Your World with Spiro Spats
            </motion.h1>
            <motion.p
              variants={fadeUp(0.9)}
              initial="hidden"
              whileInView="show"
              className="text-gray-500"
            >
              Spiro Spats is your gateway to the refreshing spirit of Egypt, where every sip delivers a fusion of bold flavors and sparkling delight! Whether you’re enjoying the lively zest of our Pineapple Spiro, the crisp and invigorating taste of Lemon Spiro, or the vibrant punch of Orange Spiro, this drink offers a unique blend that captures the essence of Egyptian vitality. Perfect for quenching your thirst and adding a splash of excitement to any moment, Spiro Spats is the ultimate drink for those who crave a taste that's as bold and refreshing as it is unforgettable. Let each effervescent sip transport you to the heart of Egypt, where tradition and modernity meet in every fizzy bubble!
            </motion.p>
            <motion.button
              variants={fadeUp(1.1)}
              initial="hidden"
              whileInView="show"
              className="!mt-5 border-2  text-green-800  px-6 py-2 rounded-md hover:bg-red-500  duration-200 "
            >
              Buy Now
            </motion.button>
          </div>
        </div>
        <div className="text-3xl max-[1205px]:hidden cursor-pointer text-black absolute bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999]">
  <ScrollLink
    to="faq"  // Replace with the ID of the next section you want to scroll to
    smooth={true}
    duration={400}
    offset={0}  // Adjust based on your navbar height, if necessary
  >
    <FaAngleDoubleDown />
  </ScrollLink>
</div>
      </div>
      
    </section>
  );
};

export default Banner;