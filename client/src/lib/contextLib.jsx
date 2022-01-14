import { useContext, createContext } from "react";

export const AppContext = createContext(null);
export const UserContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}

export function useUserContext() {
  return useContext(UserContext);
}