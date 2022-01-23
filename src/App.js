import "./App.css";
import Home from "./pages/Home";
import IndexNavbar from "./components/IndexNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Following from "./pages/Following";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
