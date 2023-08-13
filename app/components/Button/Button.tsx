import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
    className={cn(styles.button, className, {
      [styles.red]: appearance == "red",
      [styles.pink]: appearance == "pink",
    })}
    {...props}
  >
      {children}
    </button>
  );
};
