import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
const faqData = [
  {
    question: "What is Spiro Spats?",
    answer:
      "Spiro Spats is a popular fruit-flavored carbonated soft drink created by The Spiro Spats Company.",
  },
  {
    question: "What flavors does Spiro Spats?",
    answer:
      "Spiro Spats offers a variety of flavors including orange, lemon, pineapple, and more!",
  },
  {
    question: "Is Spiro Spats gluten-free?",
    answer:
      "Yes, Spiro Spats is gluten-free, making it suitable for those with gluten intolerance.",
  },
  {
    question: "How many calories are in a can of Spiro Spats?",
    answer: "A 12 oz can of Spiro Spats Orange contains about 160 calories.",
  },
];
const FAQ = () => {
  const [active, setActive] = React.useState(null);
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <div className="relative">
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8 min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-center pb-8">
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300 ">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
     
    </div>
    <div className="text-3xl max-[1205px]:hidden cursor-pointer text-black absolute bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999]">
  <ScrollLink
    to="contact"  // Replace with the ID of the next section you want to scroll to
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

export default FAQ;