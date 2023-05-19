import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { notification } from "antd";

const Register = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    password2: "",
  }
  const [formData, setFormData] = useState(initialFormData);
  const { name, email, password, password2 } = formData;

  const { isSuccess, message,isError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Exitoso",
        description: message,
      });
    }
    if(isError){
      notification.error({
        message: "Error",
        description: message,
      });
    }
    dispatch(reset())
  }, [isSuccess, message,isError]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
       dispatch(register(formData));
       setFormData(initialFormData)
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="password"
      />
      <input
        type="password"
        name="password2"
        value={password2}
        onChange={onChange}
        placeholder="repeat password"
      />
      <button type="submit">Register</button>
    </form>
  );
};
export default Register;
