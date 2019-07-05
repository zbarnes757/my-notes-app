import axios, { AxiosInstance } from "axios";

type AuthResponse = {
  data: {
    user: {
      id: string;
      username: string;
    };
    token: string;
  };
};

class AuthService {
  private token: string | null;
  authInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:4000/api/v1"
  });

  constructor() {
    this.token = localStorage.getItem("TOKEN");
    this.authInstance.defaults.headers.post["Content-Type"] =
      "application/json";
  }

  /**
   * isAuthorized
   * @returns boolean
   */
  public isAuthorized(): boolean {
    return !!this.token;
  }

  /**
   * authenticate
   */
  public async authenticate({
    action,
    username,
    password
  }: {
    action: "login" | "signup";
    username: string;
    password: string;
  }): Promise<void> {
    const {
      data: {
        data: { token }
      }
    } = await this.authInstance.post<AuthResponse>("/" + action, {
      username,
      password
    });
    this.token = token;
    localStorage.setItem("TOKEN", token);
  }
}

export default new AuthService();
