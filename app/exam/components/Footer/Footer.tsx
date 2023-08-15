"use client";
import React from "react";
import Link from "next/link";
import { User } from "./../../../api/route";
import QuestionDropdown from "./QuestionDropdown/QuestionDropdown";
import Button from "./../../../components/Button/Button";
import { Container, Row } from "react-bootstrap";
import s from "./Footer.module.scss";

function Footer({
  data,
  currentIndex,
  handlePrevQuestion,
  handleNextQuestion,
  handleFinishExam,
  setCurrentIndex,
}: User): JSX.Element {
  const updateCurrentIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
      <Row>
        <div className={s.examFooter}>
          <div className={s.examFooterLeft}>
            <p> Sol Lee</p>
          </div>
          <div className={s.examFooterCenter}>
            <div className={s.dropdown}>
              <QuestionDropdown
                currentIndex={currentIndex}
                updateCurrentIndex={updateCurrentIndex}
                questionsData={data}
              />
            </div>
          </div>
          <div className={s.examFooterRight}>
            {currentIndex !== 0 && (
              <Button appearance="pink" onClick={handlePrevQuestion}>
                Prev
              </Button>
            )}
            {currentIndex === data?.length - 1 ? (
              <Link href="/exam-status">
                <Button appearance="pink" onClick={handleFinishExam}>
                  Finish
                </Button>
              </Link>
            ) : (
              <Button appearance="pink" onClick={handleNextQuestion}>
                Next
              </Button>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
