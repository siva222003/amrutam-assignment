
import work from '../../assets/images/work.svg'

const WorkExperience = () => {
  return (
    <div className="border-[1px] border-[#DCDCDC] rounded-lg mt-6">
      <div className="rounded-t-lg aboutBg justify-between flex px-4 py-2 items-center">
        <h1 className="text-[#313131] text-xl">My Work Experience</h1>
      </div>

      <div className=" w-[88%] mx-auto my-5">
        <h1 className="text-sm font-[600] text-primary">
          I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
        </h1>

        <div className="border mt-4 w-[70%] border-[#D1D5D1]"></div>

        <div className="flex mt-4 gap-32">
          <div className="flex gap-2 items-center">
            <div className="bg-[#F7F7FC] p-3 rounded-md">
            <img src={work} alt="" />
            </div>

            <div className="text-sm flex flex-col items-between">
                <h4 className="text-[#333548] font-[500]">Midtown Medical Clinic</h4>
                <p className="text-[#33354880]" >Senior doctor</p>
            </div>
          </div>

          <h3 className='text-[#333548B5]'>2016-PRESENT</h3>
        </div>


        <div className="flex mt-4 gap-32">
          <div className="flex gap-2 items-center">
            <div className="bg-[#F7F7FC] p-3 rounded-md">
            <img src={work} alt="" />
            </div>

            <div className="text-sm flex flex-col items-between">
                <h4 className="text-[#333548] font-[500]">Midtown Medical Clinic</h4>
                <p className="text-[#33354880]" >Senior doctor</p>
            </div>
          </div>

          <h3 className='text-[#333548B5]'>2010-2015</h3>
        </div>


      </div>
    </div>
  );
};

export default WorkExperience;
