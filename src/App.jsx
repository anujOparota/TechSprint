import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Start from './pages/Start/Start'
import Login from './pages/Auth/Login';
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointments from "./pages/Appointment/Appointments";
import Emergency from "./pages/Emergency/Emergency";
import FirstAidPg from "./pages/Emergency/First_Aid/FirstAid";
import AmbulancePg from "./pages/Emergency/Ambulance/Ambulance";
import Bloodpg from "./pages/Emergency/BloodBank/BloodBank";
import BookAppointment from "./pages/Appointment/BookAppointment/BookAppointment";
import ShowAppointment from "./pages/Appointment/BookAppointment/ShowAppointment";

import Burns from "../src/pages/Emergency/First_Aid/Burns";
import Bleeding from "../src/pages/Emergency/First_Aid/Bleeding";
import Unconscious from "../src/pages/Emergency/First_Aid/Unconscious";
import Heart from "../src/pages/Emergency/First_Aid/Heart";
import SnakeBite from "../src/pages/Emergency/First_Aid/SnakeBite";
import RoadAccident from "../src/pages/Emergency/First_Aid/RoadAccident";
import Choking from "../src/pages/Emergency/First_Aid/Choking";
import Poisoning from "../src/pages/Emergency/First_Aid/Poisoning";

import MedicineInquiry from "./pages/Medicine/MedicineInquiry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
        <Route path="/appointments" element={<ProtectedRoute> <Appointments /> </ProtectedRoute> } />
        <Route path="/emergency" element={<ProtectedRoute>  <Emergency/>  </ProtectedRoute>}/>
        <Route path="/firstaid" element={<ProtectedRoute>  <FirstAidPg/>  </ProtectedRoute> }/>
        <Route path="/ambulance" element={<ProtectedRoute>  <AmbulancePg/>  </ProtectedRoute>}/>
        <Route path="/bloodbank" element={<ProtectedRoute>  <Bloodpg/>  </ProtectedRoute>}/>
        <Route path="/bookappointment" element={<ProtectedRoute>  <BookAppointment/>  </ProtectedRoute>}/>
        <Route path="/showappointment" element={<ProtectedRoute>  <ShowAppointment/>  </ProtectedRoute>}/>

        <Route path="/first-aid/burns" element={<ProtectedRoute> <Burns />  </ProtectedRoute>} />
        <Route path="/first-aid/bleeding" element={<ProtectedRoute> <Bleeding /> </ProtectedRoute>} />
        <Route path="/first-aid/unconscious" element={<ProtectedRoute> <Unconscious /> </ProtectedRoute>} />
        <Route path="/first-aid/heart" element={<ProtectedRoute>  <Heart /> </ProtectedRoute>} />
        <Route path="/first-aid/snake-bite" element={<ProtectedRoute> <SnakeBite /> </ProtectedRoute>} />
        <Route path="/first-aid/road-accident" element={<ProtectedRoute> <RoadAccident /> </ProtectedRoute>} />
        <Route path="/first-aid/choking" element={<ProtectedRoute> <Choking /> </ProtectedRoute>} />
        <Route path="/first-aid/poisoning" element={<ProtectedRoute> <Poisoning /> </ProtectedRoute>} />

        <Route path="/medicineinquiry" element={<ProtectedRoute> <MedicineInquiry/> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
