import React from "react";
import Profile from "../components/doctorprofile/Profile";
import AboutMe from "../components/doctorprofile/AboutMe";
import Specialize from "../components/doctorprofile/Specialize";
import Concerns from "../components/doctorprofile/Concerns";
import WorkExperience from "../components/doctorprofile/WorkExperience";
import Reviews from "../components/doctorprofile/Reviews";

const DoctorProfile = () => {
  return (
    <section className="w-[80%] py-10  mx-auto">
      <Profile />

      <section className="flex">
        <div className="w-[55%] ">
          <AboutMe />

          <Specialize />

          <Concerns />

          <WorkExperience />

          <Reviews />
        </div>
      </section>
    </section>
  );
};

export default DoctorProfile;
