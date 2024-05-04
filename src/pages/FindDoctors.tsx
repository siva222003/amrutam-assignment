import DoctorCard from "../components/finddoctors/DoctorCard"
import Filters from "../components/finddoctors/Filters"
import FindDoctorsHeader from "../components/finddoctors/FindDoctorsHeader"

const FindDoctors = () => {
  return (
   <section className="mb-20">

      <FindDoctorsHeader />
      <Filters />

      <div className="flex justify-center gap-4">

        {[1, 2, 3].map((_,index) => (
          <DoctorCard key={index} />
        ))}

      </div>

   </section>
  )
}

export default FindDoctors
