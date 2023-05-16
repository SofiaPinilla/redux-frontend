import axios from "axios";

const API_URL = "http://localhost:3000";

const register = async (userData) => {
  const res = await axios.post(API_URL + "/users/createUser", userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "/users/login", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
  }
  return res.data;
};

const authService = {
  register,
  login,
};

export default authService;