import selectedtick from '../../assets/images/selectedtick.svg'
import calendar from '../../assets/images/calendar.svg'
import leftarrow from '../../assets/images/leftarrow.svg'
import rightarrow from '../../assets/images/rightarrow.svg'
import { EveningTimeSlots, MorningTimeSlots } from '../../utils/constants'


const Appointment = () => {
  return (
    <section className="flex-1 h-fit text-center border p-6 border-[#DCDCDC] rounded-lg mt-6 ">
      <div className="border border-[#DCDCDC] flex justify-between p-3 rounded-lg">
        <h3>Appointment Fee</h3>
        <h3 className="font-[600] text-primary">₹699.00</h3>
      </div>

      <div className="mt-8">
        <div className="flex gap-4 items-center">
          <h2 className="font-[500]">Select your mode of session</h2>
          <div className="border flex-1"></div>
        </div>

        <div className="flex justify-between mt-6">

        <div className="border cursor-pointer py-3 px-10 border-[#DCDCDC] font-[500] flex flex-col justify-center items-center rounded-lg">
          <h3 className="text-sm">In-Clinic</h3>
          <h3 className="text-[#606060] font-[400] text-[13px]">45 Mins</h3>
        </div>

        <div className="border-[#3A643B85] border cursor-pointer py-3 bg-[#F2FBF2] px-10 border-[#DCDCDC] font-[500] flex flex-col justify-center items-center rounded-lg">
        <h3 className="flex gap-1 items-center text-primary text-sm">Video  <span><img src={selectedtick} className='w-[14px]' /></span></h3>
          <h3 className="text-[#606060] font-[400] text-[13px]">45 Mins</h3>
        </div>


        <div className="border cursor-pointer py-3 px-10 border-[#DCDCDC] font-[500] flex flex-col justify-center items-center rounded-lg">
        <h3 className="text-sm">Chat</h3>
          <h3 className="text-[#606060] font-[400] text-[13px]">10 Mins</h3>
        </div>
    </div>

     </div>


     <div className="mt-8">
        <div className="flex gap-4 items-center">
          <h2 className="font-[500]">Pick a time slot</h2>
          <div className="border flex-1"></div>
          <div className='border p-2 rounded-full '><img src={calendar} /></div>
        </div>

        <div className="flex justify-evenly mt-6 border border-[#DCDCDC] p-3 rounded-lg">

        <img src={leftarrow} className='cursor-pointer' alt="" />
      
        <div className="border-[#3A643B85] border cursor-pointer py-4 bg-[#F2FBF2] px-4 font-[500] flex flex-col justify-center items-center rounded-lg">
        <h3 className="text-primary text-sm">Mon, 10 Oct </h3>
          <h3 className="text-[#606060] font-[480] text-[13px]">10 lots</h3>
        </div>
        
        <div className=" border cursor-pointer py-4 px-4 border-[#DCDCDC] font-[500] flex flex-col justify-center items-center rounded-lg">
        <h3 className="text-primary text-sm">Tue, 11 Oct </h3>
          <h3 className="text-[#D5512E] font-[480] text-[13px]">02 slots</h3>
        </div>

        <div className=" border cursor-pointer py-4 px-4 border-[#DCDCDC] font-[500] flex flex-col justify-center items-center rounded-lg">
        <h3 className="text-primary text-sm">Wed, 12 Oct</h3>
          <h3 className="text-[#F1B93A] font-[480] text-[13px]">05 slots</h3>
        </div>

        <img src={rightarrow} className='cursor-pointer' alt="" />

        </div>

        
      <div className='mt-6'>
      <h2 className="font-[500] ml-2 text-left">Moring</h2>

        <div className="grid grid-cols-4  mt-2">

            {
                MorningTimeSlots.map((time, index) => (
                    <button key={index} className={` ${index === 6 ? "text-white bg-primary" : "border"} py-5  rounded-2xl font-[399] text-sm text-center m-1`} >{time}</button>
                ))
            }

        </div>
      </div>


      <div className='mt-6'>
      <h2 className="font-[500] ml-2 text-left">Evening</h2>

        <div className="grid grid-cols-4  mt-2">

            {
                EveningTimeSlots.map((time, index) => (
                    <button key={index} className={`  border py-5  rounded-2xl font-[399] text-sm text-center m-1`} >{time}</button>
                ))
            }

        </div>
      </div>

      </div>


      <button className="py-3 mt-6 w-[90%] text-white bg-primary rounded-md text-sm font-[500]">
            Make an Appointment
          </button> 



    </section>
  );
};

export default Appointment;
