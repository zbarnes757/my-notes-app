export interface IAuthService {
  isAuthorized: () => boolean;
  getToken: (username: string, password: string) => void;
}

class AuthService implements IAuthService {
  private token: string | null;

  constructor() {
    this.token = localStorage.getItem("TOKEN");
  }

  /**
   * isAuthorized
   * @returns boolean
   */
  public isAuthorized(): boolean {
    return !!this.token;
    // return true;
  }

  /**
   * getToken
   */
  public getToken(username: string, password: string): Promise<string> {
    // TODO: use axios to sign the user in
    this.token = "my token!";
    localStorage.setItem("TOKEN", "my token!");
    return Promise.resolve("my token!");
  }
}

export default new AuthService();
