export class AuthService {
  private static readonly AUTH_ID_KEY = "ems_auth_id";

  static login = (id: number): void => {
    localStorage.setItem(AuthService.AUTH_ID_KEY, String(id));
  };

  static logout = (): void => {
    localStorage.removeItem(AuthService.AUTH_ID_KEY);
  };

  static getAuthId = (): number | null => {
    const id = localStorage.getItem(AuthService.AUTH_ID_KEY);

    return id ? Number(id) : null;
  };
}
