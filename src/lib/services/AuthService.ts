export class AuthService {
  private static readonly AUTH_ID_KEY = "ems_auth_id";

  static login = (id: number): void => {
    sessionStorage.setItem(AuthService.AUTH_ID_KEY, String(id));
  };

  static logout = (): void => {
    sessionStorage.removeItem(AuthService.AUTH_ID_KEY);
  };

  static getAuthId = (): number | null => {
    const id = sessionStorage.getItem(AuthService.AUTH_ID_KEY);

    return id ? Number(id) : null;
  };
}
