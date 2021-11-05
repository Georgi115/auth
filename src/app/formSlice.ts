import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { validate } from "../helpers/validate";
import { IActionChangeInput } from "../interface/formInterface";
interface IState {
  [key: string]: any;
  email: string;
  password: string;
  viewPassword: boolean;
  emptyFields: boolean;
  choiceAuth: string;
  errorFields: boolean;
}
const initialState: IState = {
  email: "",
  password: "",
  viewPassword: false,
  emptyFields: false,
  errorFields: false,
  choiceAuth: "enter",
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
      state.choiceAuth = action.payload;
    },
    changePasswordView(state, action: PayloadAction) {
      state.viewPassword = !state.viewPassword;
    },
    submitForm(state, action: PayloadAction) {
      const data = [state.email, state.password];
      const res = data.every((el) => el.trim() !== "");
      if (!res) {
        state.emptyFields = true;
        return;
      }
      const obj = [
        { value: state.email, required: "email" },
        { value: state.password, required: "password" },
      ];
      if (!validate(obj)) state.errorFields = true;
    },
  },
});

export const { changeInput, changePasswordView, submitForm, changeAuth } =
  formSlice.actions;
export default formSlice.reducer;
