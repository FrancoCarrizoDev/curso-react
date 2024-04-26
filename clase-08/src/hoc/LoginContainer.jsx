import { useState } from "react";
import LoginForm from "./LoginForm";
import withFormValidation from "./withFormValidation";

const LoginFormWithValidation = withFormValidation(LoginForm);

export default function LoginContainer() {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userFormData);

  return (
    <div>
      <LoginFormWithValidation
        formData={userFormData}
        onChange={handleChange}
      />
    </div>
  );
}
