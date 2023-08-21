"use client";
import React, { useState, useEffect } from "react";
import s from "./QuestionDropdown.module.scss";

function QuestionDropdown(
    { currentIndex, updateCurrentIndex, questionsData }
    ): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(currentIndex);
    const questions = questionsData?.map(
      (_, index) => `Вопрос ${index + 1} из ${questionsData.length}`
    );

    useEffect(() => {
      setActiveButton(currentIndex);
    }, [currentIndex]);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleButtonClick = (buttonIndex) => {
      setActiveButton(buttonIndex);
      updateCurrentIndex(buttonIndex);
    };

  return (
    <div className="d-flex justify-content-center">
      <button className={s.dropdownButton} onClick={toggleDropdown}>
        {questions?.[activeButton] || questions?.[0]}
      </button>
      {isOpen && (
        <ul className={s.dropdownMenu}>
          {questionsData.map((_, buttonIndex) => (
            <li
              key={buttonIndex}
              className={`${s.dropdownMenuItem} ${
                activeButton === buttonIndex ? s.activeButton : ""
              }`}
            >
              <button onClick={() => handleButtonClick(buttonIndex)}>
                {buttonIndex + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuestionDropdown;
