import { createContext } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { IData } from "../App";

type UserType = {
  id: string | number;
  name: string;
};

type InitialStateType = {
  data: IData;
  setData: React.Dispatch<React.SetStateAction<IData>>;
};

export const CtxGlogal = createContext<InitialStateType>(
  {} as InitialStateType
);

export const loginReducer = (state: any, action: any) => {
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
