import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Following from "./pages/Following";
import CreateAlarm from "./pages/CreateAlarm";
import Alarm from "./pages/Alarm";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/following" element={<Following />} />
        <Route path="/create-alarm" element={<CreateAlarm />} />
        <Route path="/tweet" element={<Alarm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
