import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Footer } from "./Components/Pages/Footer";

export const OurFood = () => {
  const [expandedAnswers, setExpandedAnswers] = useState({});

  const toggleAnswer = (id) => {
    setExpandedAnswers((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };

  const faqs = [
    {
      id: 1,
      question: "What types of pizzas and burgers do you offer?",
      answer:
        "We offer a wide variety of pizzas and burgers to cater to all tastes and preferences. Our pizza menu includes classic options like Margherita, Pepperoni, and Hawaiian, as well as more adventurous options like BBQ Chicken and Pesto Veggie. Our burger menu includes classic beef burgers, as well as options for vegetarians and vegans like mushroom burgers and black bean burgers.",
    },
    {
      id: 2,
      question: "Do you offer gluten-free or vegan options?",
      answer:
        "Yes, we offer gluten-free crust options for our pizzas and vegan options for both our pizzas and burgers. Just make sure to let us know your dietary restrictions when placing your order",
    },

    {
      id: 4,
      question: "Can I customize my order?",
      answer:
        "Absolutely! We understand that everyone has different tastes and preferences, which is why we offer a variety of toppings and add-ons that you can choose from to customize your pizza or burger. Just let us know what you'd like when placing your order.",
    },
    {
      id: 5,
      question: "How can I pay for my order?",
      answer:
        "We accept a variety of payment methods, including credit/debit cards, PayPal, and cash on delivery. Just choose your preferred payment method when placing your order.",
    },
  ];

  return (
    <div>
      <div className="mt-[6%] mb-[5%]">
        {faqs.map((faq) => {
          const isExpanded = expandedAnswers[faq.id] || false;
          return (
            <div
              key={faq.id}
              className="flex justify-between mx-[20%] mt-[3%] border-b"
            >
              <div>
                <p className="font-bold text-[#13948d] pb-4">{faq.question}</p>
                {isExpanded && (
                  <div className="bg-[#e7faf8] w-4/5 rounded-2xl mt-5">
                    <p className="w-full leading-6 h-full flex items-center px-10 py-10 text-sm  text-justify text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleAnswer(faq.id)}
                  className="bg-[#13948d] text-white p-1 rounded-full"
                >
                  {!isExpanded ? (
                    <MdOutlineNavigateNext className="text-xl" />
                  ) : (
                    <RiArrowDropDownLine className="text-xl" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
