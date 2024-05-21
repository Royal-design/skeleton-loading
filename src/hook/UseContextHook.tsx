import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export const UseContextHook = () => {
  return useContext(DataContext);
};
