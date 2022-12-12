import { createContext } from "react";
import { IUser } from "../interface/user";

interface IUserContext {
  user: IUser | null;
  setUser: Function;
}

const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export const UserContextProvider = UserContext.Provider;
export default UserContext;
