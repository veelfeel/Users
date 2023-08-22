import { useContext } from "react";
import { UserContext } from "../context/userContext";

export function useUsers() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUsers must be used within a Provider");
  }
  return context;
}
