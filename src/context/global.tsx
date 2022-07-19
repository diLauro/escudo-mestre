import { createContext } from "react";


type UserType = {
    id: string | number,
    name: string
}

type InitialStateType = {
    user: UserType | undefined;
}

const initiaState: InitialStateType = {
    user: undefined
}

const ctxGlogal = createContext<InitialStateType>(initiaState);

const loginReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
      };
    case "LOGOUT":
      return {
        id: undefined,
        name: undefined,
      };
    default:
      state;
  }
};
