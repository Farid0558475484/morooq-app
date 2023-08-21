import React from "react";
import { User } from "../../../api/route";

function ExamQuestion({
  data,
  currentIndex,
}: {
  data: User[];
  currentIndex: number;
  questiontId: number;
  questionTitle: string;
}): JSX.Element {
  return (
    <div>
      <ul>
        {data.slice(currentIndex, currentIndex + 1).map((data) => (
          <li key={data.questiontId}>
            <div
              dangerouslySetInnerHTML={{
                __html: data.questionTitle,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExamQuestion;
