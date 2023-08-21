import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  appearance: "grey" | "white" | "l" | "answerVariant";
  children: ReactNode;
}
