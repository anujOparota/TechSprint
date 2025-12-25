import { BrowserRouter, Routes, Route, Form } from "react-router-dom";

import Login from './pages/Auth/Login';
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointments from "./pages/Appointment/Appointments";
import Emergency from "./pages/Emergency/Emergency";
import FirstAidPg from "./pages/Emergency/First_Aid/FirstAid";
import AmbulancePg from "./pages/Emergency/Ambulance/Ambulance";
import Bloodpg from "./pages/Emergency/BloodBank/BloodBank";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/emergency" element={<Emergency/>}/>
        <Route path="/firstaid" element={<FirstAidPg/>}/>
        <Route path="/ambulance" element={<AmbulancePg/>}/>
        <Route path="/blood" element={<Bloodpg/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
