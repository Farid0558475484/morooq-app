import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.scss";

const Button = ({
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
        [styles.like]: appearance == "like",
        [styles.likeActive]: appearance == "like-active",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
