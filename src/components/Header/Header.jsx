import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //   const {user}= useContext(UserContext)
  const { user } = useSelector((state) => state.auth);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/"+text)
    }
  };

  return (
    <div>
      <span>Header</span>
      <input onKeyUp={handleChange} placeholder="search post" name="text" />

      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Header;
