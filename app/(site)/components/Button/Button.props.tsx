import { DetailedHTMLProps, ReactNode } from "react";
export interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appearance: "red" | "pink" | "like" | "like-active" ;
}
