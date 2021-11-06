import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { changeAuth } from "../../app/formSlice";
import style from "./formLogin.module.css";
export const ChoiceAuth: FC = () => {
  const dispatch = useAppDispatch();
  //selectors
  const choiceAuth = useAppSelector(
    (state: RootState): string => state.formSlice.choiceAuth
  );
  //
  //handlers
  const clickChoiceAuth = (
    e: React.MouseEvent<HTMLParagraphElement>,
    type: string
  ) => {
    dispatch(changeAuth(type));
  };

  //
  const styleEnter =
    choiceAuth === "enter"
      ? `${style.formText} ${style.formTextActive}`
      : style.formText;

  const styleRegistration =
    choiceAuth === "registration"
      ? `${style.formText} ${style.formTextActive}`
      : style.formText;
  return (
    <div className={style.choiceAuth}>
      <p onClick={(e) => clickChoiceAuth(e, "enter")} className={styleEnter}>
        Вход
      </p>
      <p
        onClick={(e) => clickChoiceAuth(e, "registration")}
        className={styleRegistration}
      >
        Регистрация
      </p>
    </div>
  );
};
