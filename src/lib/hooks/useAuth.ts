import {useCallback, useLayoutEffect, useState} from "react";
import {AuthService} from "@/lib/services/AuthService.ts";

export interface AuthContextInterface {
  isAuthenticated: boolean;
  userId: number | null;
  login: (id: number) => void;
  logout: () => void;
}

export const useAuth = (): AuthContextInterface => {
  const [userId, setUserId] = useState<number | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useLayoutEffect(() => {
    setIsAuthenticated(userId !== null);
  }, [userId]);

  const login = useCallback((id: number): void => {
    AuthService.login(id);

    setUserId(id);
  }, []);

  useLayoutEffect(() => {
    const id = AuthService.getAuthId();

    if (id !== null) {
      login(id);
    }
  }, [login]);

  const logout = (): void => {
    AuthService.logout();

    setUserId(null);
  };

  return { isAuthenticated, userId, login, logout };
};
