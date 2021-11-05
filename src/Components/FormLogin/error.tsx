import { FC } from "react";
import style from "./formLogin.module.css";

interface IError {
  nameClass: string;
  text: string;
}

export const Error: FC<IError> = ({ nameClass, text }) => {
  return <p className={style[nameClass]}>{text}</p>;
};
