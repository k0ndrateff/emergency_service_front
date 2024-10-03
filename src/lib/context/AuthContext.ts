import {createContext, useContext} from "react";
import {AuthContextInterface} from "@/lib/hooks/useAuth.ts";

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const useAuthContext = (): AuthContextInterface => {
  const ctx = useContext(AuthContext);

  if (!ctx)
    throw new Error('useAuthContext must be used inside of AuthContextProvider');

  return ctx;
}
