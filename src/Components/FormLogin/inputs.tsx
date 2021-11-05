import { RootState } from "../../app/store";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { changeInput, changePasswordView } from "../../app/formSlice";
import style from "./formLogin.module.css";
import { FC } from "react";

export const Inputs: FC = () => {
  const dispatch = useAppDispatch();
  //selectors
  const viewPassword = useAppSelector(
    (state: RootState): boolean => state.formSlice.viewPassword
  );
  const email = useAppSelector(
    (state: RootState): string => state.formSlice.email
  );
  const password = useAppSelector(
    (state: RootState): string => state.formSlice.password
  );
  //

  //handlers
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const required: string = e.target.dataset.required!;
    dispatch(changeInput({ value, required }));
  };
  const clickViewPassword = (e: React.MouseEvent) => {
    dispatch(changePasswordView());
  };
  //
  return (
    <>
      {" "}
      <div className={style.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => inputChange(e)}
          value={email}
          className={style.fromInput}
          type="email"
          id="email"
          placeholder="Введите email"
          data-required="email"
        ></input>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="password">Пароль</label>
        <div className={style.blockPasswordView}>
          <input
            onChange={(e) => inputChange(e)}
            value={password}
            className={style.fromInput}
            type={viewPassword ? "text" : "password"}
            id="password"
            placeholder="Введите пароль"
            data-required="password"
          ></input>
          <i
            onClick={(e) => clickViewPassword(e)}
            className={
              viewPassword
                ? `${style.faViewPassword} fa fa-eye-slash fa-lg`
                : `${style.faViewPassword} fa fa-eye fa-lg`
            }
          ></i>
        </div>
      </div>{" "}
    </>
  );
};
