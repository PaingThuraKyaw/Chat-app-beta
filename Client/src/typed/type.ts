export interface signUpProp {
  username: string;
  email: string;
  password: string;
}

export interface LoginProp {
  email: string;
  password: string;
  select ?: "React Js" | "Node Js" | "Will Talk";
}

export type SelectorProp = "React Js" | "Node Js" | "Will Talk";
