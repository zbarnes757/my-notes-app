import React, { useState } from "react";

interface ILoginFormProps {
  switchToLogin: () => void;
  login: (username: string, password: string) => void;
}

interface ILoginFormState {
  username: string;
  password: string;
}

const LoginForm: React.FC<ILoginFormProps> = ({ switchToLogin, login }) => {
  const [formData, setFormData] = useState<ILoginFormState>({
    username: "",
    password: ""
  });

  return (
    <div>
      <h1 className="text-center font-sans">Login</h1>
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
            required
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
            className="shadow appearance-none border rounded w-full m:w-3/4 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            required
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => login(formData.username, formData.password)}
          >
            Login
          </button>
          <button
            className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
            type="button"
            onClick={switchToLogin}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
