import { useState } from "react";
import withFormValidation from "./withFormValidation";
import UserForm from "./UserForm";

const UserFormWithValidation = withFormValidation(UserForm);

export default function UserFormContainer() {
  const [userFormData, setUserFormData] = useState({
    name: "",
    lastname: "",
  });

  const handleChange = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <UserFormWithValidation formData={userFormData} onChange={handleChange} />
    </div>
  );
}
