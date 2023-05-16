import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
