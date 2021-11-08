import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { submitForm, changeLoading } from "../../app/formSlice";
import { RootState } from "../../app/store";
import { FC } from "react";
import style from "./formLogin.module.css";

export const Button: FC = () => {
  const dispatch = useAppDispatch();
  //selectors
  const errorFields = useAppSelector(
    (state: RootState): boolean => state.formSlice.errorFields
  );
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
    if (errorFields || emptyFields) return;
    dispatch(changeLoading());
    setTimeout(() => {
      dispatch(submitForm(choiceAuth));
      dispatch(changeLoading());
    }, 1000);
  };
  //
  const label = choiceAuth === "enter" ? "Войти" : "Зарегистрироваться";
  return (
    <button
      onClick={(e) => clickSubmit(e)}
      className={
        emptyFields || errorFields
          ? `${style.submitBtnOff} ${style.submitBtn}`
          : style.submitBtn
      }
      type="submit"
    >
      {label}
    </button>
  );
};
