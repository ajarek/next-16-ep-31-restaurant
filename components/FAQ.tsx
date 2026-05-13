"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Do I need a reservation?",
    answer: "We recommend making a reservation, especially for weekends or large groups, to ensure availability and a seamless dining experience."
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer: "Yes, we have a variety of vegetarian and vegan dishes. Just let our team know your preferences and we'll guide you through the menu."
  },
  {
    question: "Can I book a private event?",
    answer: "Yes, we host private events for all occasions. Contact us in advance to reserve and plan a memorable experience for your guests."
  },
  {
    question: "Is there a dress code?",
    answer: "We suggest smart casual attire, but there's no strict dress code, feel free to come as you are and enjoy a relaxed dining experience."
  },
  {
    question: "Do you accommodate food allergies?",
    answer: "Absolutely. Let our staff know your allergies when ordering, and we'll ensure your meal is prepared with extra care and safety."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 drop-shadow-md">
          FAQ
        </h2>
        <p className="text-muted-foreground text-lg">
          Answers to Your Questions
        </p>
      </div>

      <div className="w-full max-w-3xl flex flex-col space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div 
              key={index}
              initial={false}
              animate={{ 
                backgroundColor: isOpen ? "var(--color-card)" : "color-mix(in srgb, var(--color-card) 60%, transparent)",
                borderColor: isOpen ? "var(--color-border)" : "color-mix(in srgb, var(--color-border) 40%, transparent)"
              }}
              className="rounded-xl border overflow-hidden shadow-sm transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer"
              >
                <span className="text-lg md:text-xl font-medium text-foreground">
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0 text-foreground">
                  {isOpen ? (
                    <Minus strokeWidth={3} className="w-6 h-6" />
                  ) : (
                    <Plus strokeWidth={3} className="w-6 h-6" />
                  )}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;