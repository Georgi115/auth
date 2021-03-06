import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchUser, addUser } from "../helpers/authFunctions";
import { validate, validateEmptyFields } from "../helpers/validate";
import { IActionChangeInput } from "../interface/formInterface";
interface IState {
  [key: string]: any;
  email: string;
  password: string;
  viewPassword: boolean;
  emptyFields: boolean;
  choiceAuth: string;
  errorFields: boolean;
  message: null | string;
  loading: boolean;
}
const initialState: IState = {
  email: "",
  password: "",
  viewPassword: false,
  emptyFields: false,
  errorFields: false,
  choiceAuth: "enter",
  message: null,
  loading: false,
};

export const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<IActionChangeInput>) {
      const { value, required } = action.payload;
      state.emptyFields = false;
      state.errorFields = false;
      state[required] = value;
    },
    changeAuth(state, action: PayloadAction<string>) {
      if (state.choiceAuth === action.payload) return;
      state.emptyFields = false;
      state.errorFields = false;
      state.email = "";
      state.password = "";
      state.message = null;
      state.choiceAuth = action.payload;
    },
    changePasswordView(state, action: PayloadAction) {
      state.viewPassword = !state.viewPassword;
    },
    changeLoading(state, action: PayloadAction) {
      state.loading = !state.loading;
    },
    submitForm(state, action: PayloadAction<string>) {
      state.message = null;
      const { email, password } = state;
      if (!validateEmptyFields([email, password])) {
        state.emptyFields = true;
        return;
      }

      const obj = [
        { value: email, required: "email" },
        { value: password, required: "password" },
      ];
      if (!validate(obj)) {
        state.errorFields = true;
        return;
      }
      if (action.payload === "enter") {
        searchUser(email, password)
          ? (state.message = "Вы успешно зашли в приложение")
          : (state.message = "Неправильные логин и пароль");
      } else if (action.payload === "registration") {
        addUser({ email, password })
          ? (state.message = "Такой пользователь существует")
          : (state.message = "Вы успешно зарегистрированы");
      }
    },
  },
});

export const {
  changeInput,
  changePasswordView,
  submitForm,
  changeAuth,
  changeLoading,
} = formSlice.actions;
export default formSlice.reducer;
