export interface User {
  data: any;
  // questiontId: number;
  currentIndex: number | null;
  // questionTitle: string;
  // questionIndex: number;
  optionIndex: number;
  answerOptions: any;
  answerOption: any;
  index: number;
  length: number;
  // answerType: string;

  handlePrevQuestion: () => void;
  handleNextQuestion: () => void;
  handleFinishExam: () => void;
  setCurrentIndex: (index: number) => void;
  handleToggleAbcButtonVisible: () => void;
  setSelectedABCOptions: (index: any) => void;
}
export interface AnswerOption {
  answerOptionTitle: string;
  // Другие поля...
}

export interface Question {
  questiontId: number;
  questionIndex: number;
  answerType: string;
  questionTitle: string;
  answerOptions: AnswerOption[];
  // Другие поля...
}


export default async function getData(): Promise<User> {
  const randomCourseExamId = Math.floor(Math.random() * 100) + 1;

  const res = await fetch(
    `http://tapoyren.morooq.az/api/ExamQuestion/GetCourseExamByCourseExamId?courseExamId=${randomCourseExamId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();

}
