import React from "react";
import spero1 from "../../assets/spero1.png";
import spero2 from "../../assets/spero2.png";
import spero3 from "../../assets/spero3.png";
import { motion,AnimatePresence,easeInOut, delay } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export const fadeUp = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: 100,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
    };
  };

const ProductsData = [
  {
    id: 1,
    title: "Pineapple Spiro Spats",
    image: spero1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Lemon Spiro Spats",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    image: spero2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Orange Spiro Spats",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    image: spero3,
    delay: 1.1,
  },
];

const Products = () => {
  return (
    <div className="bg-gray-100 relative py-8">
      <div className="container py-14">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center pb-10"
        >
          Our Products
        </motion.h1>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
            >
              <img
                src={item.image}
                alt="#img"
                className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-handwriting text-center">
                  {item.title}
                </h1>
                <p className="text-center text-sm text-gray-600">{item.desc}</p>
                <button   className="!mt-5 border-2  text-green-800  px-6 py-2 rounded-md hover:bg-red-500  duration-200 ">
                 
                  Buy Now
                </button>
              </div>
            </motion.div>
            
          ))}
          
        </div>
       
      </div>
      <div className="text-3xl max-[1205px]:hidden cursor-pointer text-black absolute bottom-20 right-10 hover:rotate-[360deg] duration-500 z-[99999]">
  <ScrollLink
    to="banner"  // Replace with the ID of the next section you want to scroll to
    smooth={true}
    duration={400}
    offset={0}  // Adjust based on your navbar height, if necessary
  >
    <FaAngleDoubleDown />
  </ScrollLink>
</div>
    </div>
    
  );
};

export default Products;