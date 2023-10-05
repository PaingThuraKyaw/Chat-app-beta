export interface signUpProp {
  username: string;
  email: string;
  password: string;
}

export interface LoginProp {
  email: string;
  password: string;
}

export interface SelectPropSelect {
  select?: "React Js" | "Node Js" | "Will Talk";
}

export type SelectorProp = "React Js" | "Node Js" | "Will Talk";

export interface SocketProp {
  username: string;
  message: string;
  setup_time: string;
}
