import { useContext, createContext } from "react";

export const AppContext = createContext(null);
export const UserContext = createContext(null);
export const UsersContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}

export function useUserContext() {
  return useContext(UserContext);
}

export function useUsersContext() {
  return useContext(UsersContext);
}