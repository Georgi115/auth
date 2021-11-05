import { FC } from "react";
import loginStyle from "./login.module.css";
import { FormLogin } from "../../Components";

export const Login: FC = () => {
  return (
    <div className={loginStyle.login}>
      <div className={loginStyle.blockFrom}>
        <FormLogin />
      </div>
      <div className={loginStyle.blockInfo}>
        <p>Добро пожаловать в мое приложение</p>
        <p>Email должен быть типа: nick@mail.com.</p>
        <p>
          Пароль должен состоять из цифр и латинских букв верхнего и нижнего
          регистра.
        </p>
      </div>
    </div>
  );
};
