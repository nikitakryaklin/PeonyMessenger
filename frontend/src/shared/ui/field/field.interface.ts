import { HTMLProps } from "react";

export interface IField extends HTMLProps<HTMLHeadingElement> {
  title?: string;
  isError?: true;
  name: string;
}
