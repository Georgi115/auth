interface IUsers {
  [key: string]: string;
  email: string;
  password: string;
}

export const users: IUsers[] = [
  { email: "gosha@mail.ru", password: "Gosha15" },
];
