import { FC } from "react";
import loginStyle from "./login.module.css";
import { useAppSelector } from "../../app/hooks";
import { FormLogin } from "../../Components";
import { RootState } from "../../app/store";

export const Login: FC = () => {
  const message = useAppSelector(
    (state: RootState): string | null => state.formSlice.message
  );
  return (
    <div className={loginStyle.login}>
      <div className={loginStyle.blockFrom}>
        <FormLogin />
      </div>
      <div className={loginStyle.blockInfo}>
        {message ? (
          <p className={loginStyle.message}>{message}</p>
        ) : (
          <>
            <p>Добро пожаловать в мое приложение</p>
            <p>Email должен быть типа: nick@mail.com.</p>
            <p>
              Пароль должен состоять из цифр и латинских букв верхнего и нижнего
              регистра.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
