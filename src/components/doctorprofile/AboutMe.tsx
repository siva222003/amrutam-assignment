import facebook from "../../../public/images/facebook.svg";
import twitter from "../../../public/images/twitter.svg";
import youtube from "../../../public/images/youtube.svg";
import instagram from "../../../public/images/instagram.svg";
import plus from "../../../public/images/plus.svg";

const AboutMe = () => {
  return (
    <div className="border border-[#DCDCDC] rounded-lg mt-6">
      <div className="rounded-t-lg aboutBg justify-between flex px-4 py-2 items-center">
        <h1 className="text-[#313131] text-xl">A Little About Me</h1>

        <button className="flex gap-2 items-center py-1 px-4 text-[#585858] border-primary border rounded-md text-[13px] font-[500]">
          Follow{" "}
          <span>
            <img src={plus} className="w-3" alt="" />
          </span>
        </button>
      </div>

      <div className=" w-[88%] py-6 mx-auto">
        <div>
          <p className="text-sm font-[500] text-[#33354880]">
            Hello I am Dr. Bruce Wills, a gynecologist in Sanjivini Hospital
            Surat. I have worked with several hospitals and completed my MBBS
            from the University of Mumbai. I have been practicing for the past
            10 years and
          </p>

          <div className="flex items-center gap-1 mt-4">
            <div className="border flex-1 border-[#D1D5D1]"></div>

            <p className="text-sm text-[#2B2B2B] underline font-[500] cursor-pointer">
              Read More
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 my-6">
          <h1 className="text-[16px] ">Languages Spoken</h1>

          <h3 className="text-[#505050] text-[16px] py-2 px-4 rounded-2xl bg-[#2E37A40A]">
            English
          </h3>
          <h3 className="text-[#505050] text-[16px] py-2 px-4 rounded-2xl bg-[#2E37A40A]">
            Telugu
          </h3>
          <h3 className="text-[#505050] text-[16px] py-2 px-4 rounded-2xl bg-[#2E37A40A]">
            Hindi
          </h3>
        </div>

        <div className="flex gap-3">
          <img src={facebook} alt="Facebook" />

          <img src={instagram} alt="Instagram" />

          <img src={youtube} alt="Youtube" />

          <img src={twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
