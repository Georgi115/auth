import { users } from "../data/data";

export const searchUser = (email: string, password: string) => {
  const res = users.find(
    (el) => el.email === email && el.password === password
  );
  return res;
};

export const addUser = (obj: { email: string; password: string }) => {
  const res = users.find((el) => el.email === obj.email);
  if (res) {
    return true;
  }
  users.push(obj);
};
