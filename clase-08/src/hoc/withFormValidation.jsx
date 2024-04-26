import { useState } from "react";

// WrappedComponent -> LOGINFORM/ USERFORM / PRODUCTFORM / ETC

const withFormValidation = (WrappedComponent) => {
  const WithFormValidation = (props) => {
    const [errors, setErrors] = useState({});

    const validateForm = (values) => {
      //validate with Object.keys(values)

      const newErrors = {};

      Object.keys(values).forEach((key) => {
        if (!values[key]) {
          newErrors[key] = `El campo ${key} es obligatorio`;
        }
      });

      setErrors(newErrors);
      console.log(newErrors);
    };

    return (
      <WrappedComponent
        {...props}
        errors={errors}
        validateForm={validateForm}
      />
    );
  };

  return WithFormValidation;
};

export default withFormValidation;
