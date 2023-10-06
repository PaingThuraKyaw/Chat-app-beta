export interface signUpProp {
  email: string;
  password: string;
}

export interface LoginProp {
  email: string;
  password: string;
}

export interface SelectPropSelect {
  username : string
  select?: string;
}

export type SelectorProp = "React Js" | "Node Js" | "Will Talk";

export interface SocketProp {
  username: string;
  message: string;
  setup_time: string;
}


export interface UserProp {
  username : string,
  id : number
}