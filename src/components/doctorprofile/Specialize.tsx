import womenshealth from "../../../public/images/womenshealth.svg";
import immunity from "../../../public/images/immunity.svg";

import skincare from "../../../public/images/skincare.svg";

import haircare from "../../../public/images/haircare.svg";

const Specialize = () => {
  return (
    <div className="border-[1px] border-[#DCDCDC] rounded-lg mt-6">
      <div className="rounded-t-lg aboutBg  flex px-4 py-2 items-center">
        <h1 className="text-[#313131] text-xl">I Specialize In</h1>
      </div>

      <div className=" w-[88%] py-6 mx-auto flex gap-3">
        <div className="flex flex-col items-center">
          <img src={womenshealth} alt="" />
          <h3 className="text-[15px]">Health</h3>
        </div>

        <div className="flex flex-col items-center">
          <img src={skincare} alt="" />
          <h3 className="text-[15px]">Skin Care</h3>
        </div>

        <div className="flex flex-col items-center">
          <img src={immunity} alt="" />
          <h3 className="text-[15px]">Immunity</h3>
        </div>

        <div className="flex flex-col items-center">
          <img src={haircare} alt="" />
          <h3 className="text-[15px]">Hair care</h3>
        </div>
      </div>
    </div>
  );
};

export default Specialize;
