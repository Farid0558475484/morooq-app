"use client";

import React, { useState } from "react";
import { User } from "./../../../api/route";
import Button from "../../../components/Button/Button";
import P from "../../../components/P/P";
import s from "./ExamBodyRightHeader.module.scss";

function ExamBodyRightHeader({
  currentIndex,
  handleToggleAbcButtonVisible,
}: User): JSX.Element {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className={s.BodyRightContent}>
      <div className={s.count}>
        <Button appearance="pink">{currentIndex + 1} </Button>
      </div>
      <div className={s.markReview}>
        <Button
          appearance="like-active"
          // className={`${s.markLikeButton} ${isLike ? s.isLike : ""}`}
          onClick={handleLike}
        >
          Like
        </Button>
        <P appearance="grey"> Mark for Review</P>
      </div>
      <div className={s.abc}>
        <Button appearance="pink" onClick={handleToggleAbcButtonVisible}>
          Line
        </Button>
      </div>
    </div>
  );
}

export default ExamBodyRightHeader;
