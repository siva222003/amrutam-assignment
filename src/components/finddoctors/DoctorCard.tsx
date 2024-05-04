import finddoctor from "../../assets/images/finddoctor.png";
import finddocstar from "../../assets/images/finddocstar.svg";
import grad from "../../assets/images/grad.svg";
import capsule from "../../assets/images/capsule.svg";
import chat from "../../assets/images/chat.svg";


const DoctorCard = () => {
  return (
    
    <div className="bg-[#FFF7E2] rounded-2xl shadow-md w-fit text-center py-6 px-6 mt-6">

        <div className="relative w-fit mx-auto">
        
        <img src={finddoctor} className="w-36 h-36 rounded-full object-cover" alt="Find Doctor" />
        
         <div className="flex items-center gap-1 w-fit absolute -bottom-1 right-10 bg-black py-1  px-3  rounded-3xl">
            <h3 className="text-white font-[500] text-sm">4.5</h3>
            <img src={finddocstar} className="-mt-1" />
         </div>

        </div>

        <h1 className="font-bold mt-4 ml-3 text-[#2E2F2E] text-3xl text-left">Dr. Prerna Narang</h1>

        <div className="text-[#646665] mt-2 text-[16px] flex flex-col gap-2 pl-7">

         <div className="flex gap-1">
            <img src={capsule} alt="" />
            <h3>Male-Female Infertility</h3>
         </div>

         <div className="flex gap-1">
            <img src={grad} alt="" />
            <h3>7 years of Experience</h3>
         </div>

         <div className="flex gap-1">
            <img src={chat} alt="" />
            <h3>Speaks: English, Hindi, Marathi</h3>
         </div>

        </div>

        <div className="flex gap-2 mt-3">

        <div className="border cursor-pointer py-3 px-3 border-[#3A643B63] font-[500] flex flex-col justify-center items-center rounded-lg">
          <h3 className="text-sm">Video Consultation</h3>
          <h3 className="text-primary font-[400] text-[13px]">₹800</h3>
        </div>
        <div className="border cursor-pointer py-3 px-3 border-[#3A643B63] font-[500] flex flex-col justify-center items-center rounded-lg">
          <h3 className="text-sm">Chat Consultation</h3>
          <h3 className="text-primary font-[400] text-[13px]">Free</h3>
        </div>

        </div>

        <div className="flex flex-col gap-3 mt-3">
          <button className="py-3 px-4 text-primary border-primary border-[1px] rounded-md text-[14px] font-[500]">
            View Priofile
          </button>
          <button className="py-3 px-4 text-white bg-primary rounded-md text-[14px] font-[500]">
            Book a Consultation
          </button>
        </div>
        
    </div>
  )
}

export default DoctorCard
