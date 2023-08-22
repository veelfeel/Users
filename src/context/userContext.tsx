import { createContext, useReducer } from "react";
import { userReducer } from "./userReducer";
import { UserAction, IUser, Status } from "../@types/user";

interface StateContextType {
  status: Status;
  users: IUser[];
  dispatch: React.Dispatch<UserAction>;
}

export const UserContext = createContext<StateContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const initialState = {
    status: Status.LOADING,
    users: [],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
