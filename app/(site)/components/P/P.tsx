import { PProps } from "./P.props";
import styles from "./P.module.scss";
import cn from "classnames";

const P = ({
  appearance = "grey",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.grey]: appearance == "grey",
        [styles.white]: appearance == "white",
        [styles.l]: appearance == "l",
        [styles.answerVariant]: appearance == "answerVariant",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
