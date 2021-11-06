import { IData } from "../interface/formInterface";
interface IRegExp {
  [key: string]: RegExp;
  email: RegExp;
  password: RegExp;
}
const regExpDic: IRegExp = {
  email:
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
  password:
    /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/,
};

export const validate = (data: IData[]) => {
  const res = data.every((el) => regExpDic[el.required].test(el.value));
  return res;
};
