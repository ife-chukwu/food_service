import React, { useState } from "react";
import { Footer } from "./Footer";
import { MdOutlineNavigateNext } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

export const OurCompany = () => {
  const faqData = [
    {
      id: 1,
      question: "What is Pizbug?",
      answer:
        "Pizbug is a webstore that specializes in selling pizza and burgers.",
    },
    {
      id: 2,
      question: "Where is Pizbug located?",
      answer:
        "Pizbug is a webstore and does not have a physical location. It is an online-based business.",
    },
    {
      id: 3,
      question: "How can I order from Pizbug?",
      answer:
        "Ordering from Pizbug is easy. Simply visit our website and select the pizza or burger you would like to order. You can then enter your delivery address and payment information to complete your order.",
    },
    {
      id: 4,
      question: "What are the delivery hours for Pizbug?",
      answer:
        "Pizbug offers delivery from 11:00 AM to 10:00 PM, seven days a week.",
    },
    {
      id: 5,
      question: "How long does delivery take?",
      answer:
        "Delivery times vary depending on your location and the volume of orders we are processing. However, we strive to deliver your order as quickly as possible, usually within 30-45 minutes.",
    },
    {
      id: 6,
      question: "What forms of payment does Pizbug accept?",
      answer:
        "Pizbug accepts various forms of payment, including credit cards, debit cards, and online payment platforms such as PayPal.",
    },
    {
      id: 7,
      question: "What if I have a problem with my order?",
      answer:
        "If you experience any issues with your order, please contact our customer service team immediately. We will do our best to resolve any issues and ensure your satisfaction.",
    },
    {
      id: 8,
      question: "Does Pizbug offer catering services for events?",
      answer:
        "Yes, Pizbug offers catering services for events of all sizes. Please contact our customer service team to discuss your specific catering needs.",
    },
    {
      id: 9,
      question: "Does Pizbug offer any discounts or promotions?",
      answer:
        "Pizbug occasionally offers discounts and promotions to our customers. To stay updated on our latest offers, please subscribe to our newsletter or follow us on social media.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleDropdownClick = (answer, id) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [id]: prevState[id] === answer ? "" : answer,
    }));
  };
  return (
    <div className="mt-[6%] ">
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className="flex justify-between mx-[20%] mt-[3%] mb-[5%] border-b"
        >
          <div>
            <p className="font-bold text-[#13948d] pb-4">{faq.question}</p>
            {selectedAnswers[faq.id] === faq.answer ? (
              <div className="bg-[#e7faf8] w-4/5 rounded-2xl mt-5">
                <p className="w-full leading-6 h-full flex items-center px-10 py-10 text-sm  text-justify text-gray-600">
                  {" "}
                  {faq.answer}
                </p>
              </div>
            ) : null}
          </div>
          <div>
            <button
              onClick={() => handleDropdownClick(faq.answer, faq.id)}
              className="bg-[#13948d] text-white p-1 rounded-full"
            >
              {!selectedAnswers[faq.id] ? (
                <MdOutlineNavigateNext className="text-xl" />
              ) : (
                <RiArrowDropDownLine className="text-xl" />
              )}{" "}
            </button>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};
