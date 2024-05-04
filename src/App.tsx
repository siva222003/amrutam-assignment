import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import DoctorProfile from "./pages/DoctorProfile";
import FindDoctors from "./pages/FindDoctors";
const App = () => {
  return (
    <main className="font-nunito">
      <Navbar />

      <Routes>
        <Route path="/" element={ <DoctorProfile />  } />
        <Route path="/find-doctors" element={<FindDoctors />} />
      </Routes>
    </main>
  );
};

export default App;
