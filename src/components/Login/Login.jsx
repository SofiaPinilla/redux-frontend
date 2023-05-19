import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { notification } from "antd";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Exitoso",
        description: message,
      });
    }
    if (isError) {
      notification.error({
        message: "Error",
        description: message,
      });
    }
    dispatch(reset())
  }, [isSuccess, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;
