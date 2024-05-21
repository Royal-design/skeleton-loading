import { ReactElement, createContext } from "react";
import { endpoint } from "../Api/api";
import { getUsers } from "../Api/api";
import useSWR from "swr";

type UserType = {
  id: number;
  company: any;
  name: string;
  email: string;
};

type UseStateType = {
  users: UserType[];
  isLoading: boolean;
  error: any;
};

const initUseState: any = {};

export const DataContext = createContext<UseStateType>(initUseState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const DataContextProvider = ({ children }: ChildrenType) => {
  const { data: users, isLoading, error } = useSWR(endpoint, getUsers);

  return (
    <DataContext.Provider value={{ users, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};
