import { BrowserRouter, Routes, Route, Form } from "react-router-dom";

import Login from './pages/Auth/Login';
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointments from "./pages/Appointment/Appointments";
import Emergency from "./pages/Emergency/Emergency";
import FirstAidPg from "./pages/Emergency/First_Aid/FirstAid";
import AmbulancePg from "./pages/Emergency/Ambulance/Ambulance";
import Bloodpg from "./pages/Emergency/BloodBank/BloodBank";
import BookAppointment from "./pages/Appointment/BookAppointment/BookAppointment";


import Burns from "../src/pages/Emergency/First_Aid/Burns";
import Bleeding from "../src/pages/Emergency/First_Aid/Bleeding";
import Unconscious from "../src/pages/Emergency/First_Aid/Unconscious";
import Heart from "../src/pages/Emergency/First_Aid/Heart";
import SnakeBite from "../src/pages/Emergency/First_Aid/SnakeBite";
import RoadAccident from "../src/pages/Emergency/First_Aid/RoadAccident";
import Choking from "../src/pages/Emergency/First_Aid/Choking";
import Poisoning from "../src/pages/Emergency/First_Aid/Poisoning";
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
        <Route path="/bloodbank" element={<Bloodpg/>}/>
        <Route path="/bookappointment" element={<BookAppointment/>}/>


        <Route path="/first-aid/burns" element={<Burns />} />
        <Route path="/first-aid/bleeding" element={<Bleeding />} />
        <Route path="/first-aid/unconscious" element={<Unconscious />} />
        <Route path="/first-aid/heart" element={<Heart />} />
        <Route path="/first-aid/snake-bite" element={<SnakeBite />} />
        <Route path="/first-aid/road-accident" element={<RoadAccident />} />
        <Route path="/first-aid/choking" element={<Choking />} />
        <Route path="/first-aid/poisoning" element={<Poisoning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
