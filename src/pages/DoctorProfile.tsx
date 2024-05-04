import Profile from "../components/doctorprofile/Profile";
import AboutMe from "../components/doctorprofile/AboutMe";
import Specialize from "../components/doctorprofile/Specialize";
import Concerns from "../components/doctorprofile/Concerns";
import WorkExperience from "../components/doctorprofile/WorkExperience";
import Reviews from "../components/doctorprofile/Reviews";
import Appointment from "../components/doctorprofile/Appointment";

const DoctorProfile = () => {
  return (
    <section className="w-[80%] py-10  mx-auto">
      <Profile />

      <section className="flex gap-5">
        <div className="w-[55%]">
          <AboutMe />

          <Specialize />

          <Concerns />

          <WorkExperience />

          <Reviews />
        </div>

        <Appointment />

      </section>
    </section>
  );
};

export default DoctorProfile;
