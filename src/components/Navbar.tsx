import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className=" bg-[#FFF7E2] py-3">
      <div className="flex justify-between w-[80%] mx-auto items-center">
        <div className="flex items-center">
          <img src={logo} className="w-44 h-8 cursor-pointer" alt="logo" />

          <div className="ml-16">
            <ul className="flex">
              <li className="px-3 text-[14px] font-[700] cursor-pointer">
                <NavLink to="/" className={({isActive}) => isActive ? "text-primary" : ""} >Home</NavLink>
              </li>
              <li className="px-3 text-[14px] font-[700] cursor-pointer ">
                <NavLink to="/find-doctors" className={({isActive}) => isActive ? "text-primary" : ""}>Find Doctors</NavLink>
              </li>
              <li className="px-3 text-[14px] font-[700] cursor-pointer">
                <NavLink to="/about" className={({isActive}) => isActive ? "text-primary" : ""}>About</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="py-2 px-4 text-primary border-primary border-[1px] rounded-md text-[13px] font-[500]">
            Login
          </button>
          <button className="py-2 px-4 text-white bg-primary rounded-md text-[13px] font-[500]">
            Sign-up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
