import React, { Suspense } from "react";
import ExamQuestion from "../ExamQuestion/ExamQuestion.1";

function Loading() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        molestias at eveniet quidem inventore. Reiciendis, nulla nostrum.
        Reprehenderit magnam veritatis repellat. Nulla placeat, officiis maxime
        fugit voluptatem sed optio eaque.
      </p>
    </div>
  );
}

function LoadingExam(): JSX.Element {
  return <Suspense fallback={<Loading />}>{<ExamQuestion />}</Suspense>;
}
export default LoadingExam;
