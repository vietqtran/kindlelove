"use state";

import React, { useState } from "react";

interface AccordionProps {
  categories: { id: number; name: string; text: string }[];
  currentCategory: number;
  setCurrentCategory: (category: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="font-ogg-regular w-full cursor-pointer text-left text-lg hover:font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter Categories
      </button>
      {isOpen && (
        <div className="mt-2 space-y-2">
          {categories.map((c) => (
            <div
              key={c.id}
              onClick={() => {
                setCurrentCategory(c.id);
                setIsOpen(false);
              }}
              className={`${
                currentCategory === c.id && "font-bold"
              } font-ogg-light text-lg hover:font-bold cursor-pointer`}
            >
              {c.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
