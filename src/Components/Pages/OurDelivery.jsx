import React, { useState } from "react";
import { Footer } from "./Footer";
import { MdOutlineNavigateNext } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

export const OurDelivery = () => {
  const faqData = [
    {
      id: 1,
      question: "What are your delivery times and fees?",
      answer:
        "Our delivery times vary depending on your location and order size, but we typically aim to deliver within 30-45 minutes of receiving your order. Our delivery fees also vary, but we strive to keep them as low as possible while still providing prompt and reliable service.",
    },
    {
      id: 2,
      question: "What if I have an issue with my order?",
      answer:
        "We strive to provide the best possible service to our customers, but we understand that issues can sometimes arise. If you have any problems with your order, please don't hesitate to contact us and we'll do our best to make it right.",
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
