import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

interface IAuthenticationBoxProps {
  authenticate: (
    action: "login" | "signup",
    username: string,
    password: string
  ) => void;
}

const AuthenticationBox: React.FC<IAuthenticationBoxProps> = ({
  authenticate
}) => {
  const [signingUp, setSigninUp] = useState(true);

  const signup = (username: string, password: string) =>
    authenticate("signup", username, password);
  const login = (username: string, password: string) =>
    authenticate("login", username, password);

  const content = signingUp ? (
    <SignUpForm switchToLogin={() => setSigninUp(!signingUp)} signup={signup} />
  ) : (
    <LoginForm switchToLogin={() => setSigninUp(!signingUp)} login={login} />
  );

  return content;
};

export default AuthenticationBox;
