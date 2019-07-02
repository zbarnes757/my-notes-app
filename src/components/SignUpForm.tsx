import React, { useState } from "react";
import { IAuthService } from "../lib/AuthService";

interface ISignUpFormProps {
  switchToLogin: () => void;
  getToken: (username: string, password: string) => void;
}

interface ISignUpFormState {
  username: string;
  password: string;
  passwordConfirmation: string;
  isValid: boolean;
}

const SignUpForm: React.FC<ISignUpFormProps> = ({
  switchToLogin,
  getToken
}) => {
  const [formData, setFormData] = useState<ISignUpFormState>({
    username: "",
    password: "",
    passwordConfirmation: "",
    isValid: true
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData({
      ...formData,
      password: newPassword,
      isValid: newPassword === formData.passwordConfirmation
    });
  };

  const handlePasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPasswordConfirmation = e.target.value;
    setFormData({
      ...formData,
      passwordConfirmation: newPasswordConfirmation,
      isValid: newPasswordConfirmation === formData.password
    });
  };

  const handleSubmit = () => {
    if (formData.isValid) {
      getToken(formData.username, formData.password);
    }
  };

  return (
    <div>
      <h1 className="text-center font-sans">Signup</h1>
      <form className="bg-white px-8 pt-6 pb-8">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full m:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={e =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={
              "shadow appearance-none border rounded w-full m:w-3/4 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " +
              (formData.isValid ? "" : "border-red-500")
            }
            id="password"
            type="password"
            placeholder="******************"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="passwordConfirmation"
          >
            Password Confirmation
          </label>
          <input
            className={
              "shadow appearance-none border rounded w-full m:w-3/4 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline " +
              (formData.isValid ? "" : "border-red-500")
            }
            id="passwordConfirmation"
            type="password"
            placeholder="******************"
            onChange={handlePasswordConfirmationChange}
          />
          {!formData.isValid && (
            <p className="text-red-500 text-xs italic">
              Password does not match.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Create Account
          </button>
          <button
            className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
            type="button"
            onClick={switchToLogin}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
