import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import DoctorProfile from "./pages/DoctorProfile";
const App = () => {
  return (
    <main className="font-poppins">
      <Navbar />

      <Routes>
        <Route path="/" element={ <DoctorProfile />  } />
        {/* <Route path="/about" element={<div>About</div>} /> */}
      </Routes>
    </main>
  );
};

export default App;
