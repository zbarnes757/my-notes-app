import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

interface IAuthenticationBoxProps {
  getToken: (username: string, password: string) => void;
}

const AuthenticationBox: React.FC<IAuthenticationBoxProps> = ({ getToken }) => {
  const [signingUp, setSigninUp] = useState(true);

  const content = signingUp ? (
    <SignUpForm
      switchToLogin={() => setSigninUp(!signingUp)}
      getToken={getToken}
    />
  ) : (
    <LoginForm
      switchToLogin={() => setSigninUp(!signingUp)}
      getToken={getToken}
    />
  );

  return content;
};

export default AuthenticationBox;
