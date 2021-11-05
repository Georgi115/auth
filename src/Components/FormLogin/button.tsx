import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { submitForm } from "../../app/formSlice";
import { RootState } from "../../app/store";
import { FC } from "react";
import style from "./formLogin.module.css";

export const Button: FC = () => {
  const dispatch = useAppDispatch();
  //selectors
  const emptyFields = useAppSelector(
    (state: RootState): boolean => state.formSlice.emptyFields
  );
  const choiceAuth = useAppSelector(
    (state: RootState): string => state.formSlice.choiceAuth
  );
  //

  //handlers
  const clickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(submitForm());
  };
  //
  const label = choiceAuth === "enter" ? "Войти" : "Зарегистрироваться";
  return (
    <button
      onClick={(e) => clickSubmit(e)}
      className={
        emptyFields
          ? `${style.submitBtnOff} ${style.submitBtn}`
          : style.submitBtn
      }
      type="submit"
    >
      {label}
    </button>
  );
};
