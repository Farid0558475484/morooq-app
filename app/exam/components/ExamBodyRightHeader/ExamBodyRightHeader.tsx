"use client";

import React from "react";

import s from "./ExamBodyRightHeader.module.scss";
import Button from "./../../../components/Button/Button";

function ExamBodyRightHeader({ currentIndex, handleToggleAbcButtonVisible }) {
  //   const [isLike, setIsLike] = useState(false);

  //   const handleLike = () => {
  //     setIsLike(!isLike);
  //   };

  return (
    <div className={s.BodyRightContent}>
      <div className={s.count}>
        <p className={s.countIndex}>{currentIndex + 1}</p>
      </div>
      <div className={s.markReview}>
        <Button
          appearance="like-active"
          // className={`${s.markLikeButton} ${isLike ? s.isLike : ""}`}
          //   onClick={handleLike}
        >
          Like
        </Button>
        <p className={s.markText}> Mark for Review</p>
      </div>
      <div className={s.abc}>
        <Button appearance="pink" onClick={handleToggleAbcButtonVisible}>
          ABC
        </Button>
      </div>
    </div>
  );
}

export default ExamBodyRightHeader;
