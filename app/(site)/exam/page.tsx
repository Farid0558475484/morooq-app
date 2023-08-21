"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import ExamBodyRightHeader from "./components/ExamBodyRightHeader/ExamBodyRightHeader";
import ExamQuestion from "./components/ExamQuestion/ExamQuestion";
import LoadingExam from "./components/Loading/Loading";
import Button from "../components/Button/Button";
import P from "../components/P/P";

import getData, { User } from "../api/route";
import s from "./Exam.module.scss";

export default function Exam(): JSX.Element {
  const [data, setData] = useState<User[]>([]);
  const [width, setWidth] = useState<number>(50);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAbcButtonVisible, setIsAbcButtonVisible] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [selectedABCOptions, setSelectedABCOptions] = useState<
    (number | null)[][]
  >([]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [data]);

  const handleToggleAbcButtonVisible = useCallback(() => {
    setIsAbcButtonVisible((prevVisible) => !prevVisible);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result);
        setSelectedABCOptions(Array(result.length).fill([]));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleToggleAbcActive = (
    questionIndex: number,
    optionIndex: number
  ) => {
    setSelectedABCOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      const selectedOptions = newOptions[questionIndex] || [];

      // Проверяем, была ли уже выбрана эта опция
      const optionExists = selectedOptions.includes(optionIndex);

      if (optionExists) {
        // Если опция уже выбрана, удаляем её из списка
        newOptions[questionIndex] = selectedOptions.filter(
          (index) => index !== optionIndex
        );
      } else {
        // Иначе, добавляем её в список
        newOptions[questionIndex] = [...selectedOptions, optionIndex];
      }

      return newOptions;
    });
  };

  const handleAnswerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const selectedAnswerBodyElement = event.currentTarget;
    const answerIndex = parseInt(
      selectedAnswerBodyElement.dataset.index || "0"
    ); // Обработка NaN

    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[currentIndex] = answerIndex;
      return updatedAnswers;
    });

    setSelectedABCOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[currentIndex] = null;
      return newOptions;
    });
  };

  const handleClick = (section: string) => {
    if (section === "examBodyLeft") {
      if (width === 60) {
        setWidth(50);
      } else {
        setWidth(60);
      }
    } else if (section === "examBodyRight") {
      if (width === 30) {
        setWidth(50);
      } else {
        setWidth(30);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < data?.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <>
      <Container fluid>
        <Row>
          <div className={s.examBody}>
            <div className={s.examBodyLeft} style={{ width: `${width}%` }}>
              <ExamQuestion data={data} currentIndex={currentIndex} />

              <Button
                appearance="pink"
                onClick={() => handleClick("examBodyLeft")}
              >
                Left
              </Button>
            </div>

            <div
              className={s.examBodyRight}
              style={{ width: `${100 - width}%` }}
            >
              <ExamBodyRightHeader
                data={data}
                currentIndex={currentIndex}
                handleToggleAbcButtonVisible={handleToggleAbcButtonVisible}
              />

              <div className={s.BodyRidghtQuestion}>
                <ul>
                  <li key={data[currentIndex]?.questiontId}>
                    <p>{data[currentIndex]?.answerType}</p>
                  </li>
                </ul>
              </div>

              <div className={s.BodyRightAnswer}>
                {data[currentIndex]?.answerOptions?.map(
                  (answerOption: any, index: number) => (
                    <div className={s.answerBodyAbc} key={index}>
                      <div
                        className={`${s.answerBody} ${
                          selectedAnswers[currentIndex] === index
                            ? s.redBorder
                            : ""
                        }`}
                        onClick={handleAnswerClick}
                        data-index={index}
                      >
                        <P appearance="answerVariant">A</P>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: answerOption?.answerOptionTitle,
                          }}
                        />
                      </div>

                      <div>
                        {isAbcButtonVisible && (
                          <button
                            className={`${s.abcAnswerButton} ${
                              selectedABCOptions[currentIndex]?.includes(index)
                                ? s.answerBodyActive
                                : ""
                            }`}
                            onClick={() =>
                              handleToggleAbcActive(currentIndex, index)
                            }
                          >
                            abc
                          </button>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>

              <Button
                appearance="pink"
                className={s.rightButton}
                onClick={() => handleClick("examBodyRight")}
              >
                Right
              </Button>
            </div>
          </div>
        </Row>
      </Container>

      <Footer
        data={data}
        currentIndex={currentIndex}
        handlePrevQuestion={handlePrevQuestion}
        handleNextQuestion={handleNextQuestion}
        handleToggleAbcButtonVisible={handleToggleAbcButtonVisible}
        setSelectedABCOptions={setSelectedABCOptions}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
