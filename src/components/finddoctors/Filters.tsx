import { Select } from "antd";
import downarrow from "../../assets/images/downarrow.svg";
import close from "../../assets/images/close.svg";

import { selectInput } from "../../utils/constants";
import { useState } from "react";

const Filters = () => {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  const handleChange = (value: string) => {
    setSelectedValue([...selectedValue, value]);
  };
  const removeValue = (value: string) => {
    setSelectedValue(prev => prev.filter((val) => val !== value));
  }

  return (
    <div>
      <div className="flex py-3 justify-center gap-14 border border-[#EDEDED]">
        {selectInput.map((select, index) => (
          <div key={index} className="">
            <Select
              placeholder={select.placeholder}
              style={{ width: 120,color:"#F3F3F3" }}
              onChange={handleChange}
              suffixIcon={<img src={downarrow} alt="downarrow" />}
              className="focus:outline-none hover:outline-none hover:ring-0 focus:ring-0 "
              options={select.options}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row-reverse w-[70%] mx-auto py-7">
        {selectedValue.length > 0 &&
          selectedValue.map((value, index) => (
            <div
              key={index}
              className="flex  items-center gap-5 bg-[#EAF2EA] rounded-full px-4 py-3 ml-2 mt-2 text-[13px]"
            >
              <h3>{value}</h3>
              <button className="focus:outline-none" onClick={()=>removeValue(value)}>
                <img src={close} className="w-[9px]" alt="close" />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filters;
