import React, { FC } from "react";
import { ChoiceAuth, Button, Inputs, Error } from "..";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import style from "./formLogin.module.css";

export const FormLogin: FC = () => {
  const message = useAppSelector(
    (state: RootState): string | null => state.formSlice.message
  );
  const emptyFields = useAppSelector(
    (state: RootState): boolean => state.formSlice.emptyFields
  );
  const errorFields = useAppSelector(
    (state: RootState) => state.formSlice.errorFields
  );
  return (
    <form
      className={
        errorFields
          ? `${style.formLogin} ${style.formLoginError}`
          : `${style.formLogin}`
      }
    >
      <ChoiceAuth />
      <Inputs />
      {message === "Вы успешно зашли в приложение" ||
      message === "Вы успешно зарегистрированы" ? null : (
        <Button />
      )}
      {emptyFields ? (
        <Error nameClass="emptyFieldsError" text="Введите все поля" />
      ) : null}
      {errorFields ? (
        <Error nameClass="errorFields" text="Неккоректный email и пароль" />
      ) : null}
    </form>
  );
};
