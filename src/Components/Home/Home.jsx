import React from "react";
import spero1 from "../../assets/spero1.png";
import spero2 from "../../assets/spero2.png";
import spero3 from "../../assets/spero3.png";
import { FaWhatsapp } from "react-icons/fa";
import { motion ,AnimatePresence,easeInOut, delay } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
import "./Home.css"
import { UpdateFollower } from "react-mouse-follower";
import { Link as ScrollLink } from "react-scroll";
const SlideRight = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: 100,
      },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: delay,
          ease: easeInOut,
        },
      },
      exit: {
        opacity: 0,
        x: -50,
        transition: {
          duration: 0.2,
          ease: easeInOut,
        },
      },
    };
  };

const HomeData = [
  {
    id: 1,
    image: spero1,
    title: "Pineapple Spiro Spats",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit  Repudiandae ad sequi consectetur dolores consequatur quidem iste commodiAnimi deserunt harum cumque maiores itaque ",
    price: "45L.E",
    modal: "Pineapple",
    bgColor: "#dcc91a",
  },
  {
    id: 2,
    image: spero2,
    title: "Lemon Spiro Spats",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit  Repudiandae ad sequi consectetur dolores consequatur quidem iste commodiAnimi deserunt harum cumque maiores itaque ",
    price: "47.5L.E",
    modal: "Lemon",
    bgColor: "#51a95ee1",
  },
  {
    id: 3,
    image: spero3,
    title: "Orange Spiro Spats",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit  Repudiandae ad sequi consectetur dolores consequatur quidem iste commodiAnimi deserunt harum cumque maiores itaque ",
    price: "50L.E",
    modal: "Orange",
    bgColor: "#da7b2d",
  },
];
const Home = () => {
  const [activeData, setActiveData] = React.useState(HomeData[2]);
  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <motion.div
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px] pt-32">
        {/* DataInfo */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[600px] order-2 md:order-1">
          <div className="space-y-5 text-center md:text-left text-white">
            <UpdateFollower
            mouseOptions={{
                backgroundColor:"white",
                zIndex:10,
                followSpeed:0,
                scale:10,
                mixBlendMode:"difference"            }}>
            <AnimatePresence mode="wait">
            <motion.h1 
             key={activeData.id}
             variants={SlideRight(0.2)}
             initial="hidden"
             animate="show"
             exit="exit"
            className="text-3xl lg:text-6xl xl:text-6xl font-bold font-handwriting text-shadow">
              {activeData.title}
            </motion.h1>
            </AnimatePresence>
            </UpdateFollower>
            <AnimatePresence mode="wait">
            <motion.p 
              key={activeData.id}
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-sm leading-loose text-white/80">
              {activeData.subtitle}
            </motion.p>
            </AnimatePresence>
         
            <AnimatePresence mode="wait">
            <motion.button
              key={activeData.id}
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="show"
              exit="exit"
               className="px-4 py-2 bg-white inline-block text-[#0A5046] font-normal rounded-3xl hover:bg-red-500 duration-500">
              Order Now
            </motion.button>
            </AnimatePresence>
            {/* list separator */}
            <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="show"
              exit="exit"
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 "
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm ">Top Recommendation</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>
              </AnimatePresence>
         
           
          {/* imageSwitcher */}
          <motion.div
         key={activeData.id}
         variants={SlideRight(0.8)}
         initial="hidden"
         animate="show"
         exit="exit"
          className="grid grid-cols-3 ">
            {HomeData.map((data) => {
              return (
                <div onClick={()=>handleActiveData(data)} className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200">
                  <div className="flex justify-center">
                    <img
                      src={data.image}
                      alt="#img"
                      className={
                        'w-[80px] img-shadow ${activeData.image === data.image accordion ?"opacity-100 scale-110" : opacity-50}'
                      }
                    />
                  </div>
                  <div className="text-center text-white ">
                    <p className="text-base line-through opacity-70">
                      {data.price}
                    </p>
                    <p className="text-xl font-bold">{data.price}</p>
                  </div>
                </div>
              );
            })}
            
          </motion.div>
          
        </div>
        </div>
        {/* HomeImage */}
        
        <div className="flex flex-col justify-end items-center relative order-1 md:order-2 ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,
                  x: -100,

                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[150px] md:w-[200px] xl:w-[235px] img-shadow relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,

                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/20 text-[300px] max-sm:text-[100px] max-md:text-[200px] max-lg:text-[230px]   max-xl:text-[250px] max-2xl:text-[250px] font-poppins font-extrabold absolute top-24 left-1/2 xl:pr-96 -translate-x-1/2  -translate-y-1/2 z-0"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
      
        
        {/* WTSP Icon */}
        <div className="text-3xl max-md:hidden text-white fixed bottom-20 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
          <div className="text-3xl max-[1205px]:hidden cursor-pointer text-black absolute bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999]">
  <ScrollLink
    to="products"  // Replace with the ID of the next section you want to scroll to
    smooth={true}
    duration={400}
    offset={0}  // Adjust based on your navbar height, if necessary
  >
    <FaAngleDoubleDown />
  </ScrollLink>
</div>
  
      </div>
   
    </motion.div>
   
  );
};

export default Home;
