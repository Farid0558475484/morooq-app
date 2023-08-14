import Button from "../../../../components/Button/Button";
import Time from "./Time/Time";
import style from "./ExamTime.module.css";

async function ExamTime() {
  return (
    <div className={style.examTime}>
      <Time />
      <Button appearance="pink">Hide</Button>
    </div>
  );
}

export default ExamTime;
