import coverphoto from "../../assets/images/coverphoto.png";
import profile from "../../assets/images/profile.png";
import star from "../../assets/images/star.svg";
import verify from "../../assets/images/verify.svg";

const Profile = () => {
  return (
    <div className="">
      <div className="h-24 rounded-t-lg opacity-70 overflow-hidden">
        <img src={coverphoto} alt="Cover Photo" />
      </div>

      <div className="bg-[#FFFBF2] flex justify-between items-center px-14 border-[1px] border-[#D8D8D8]">

        <div className="flex gap-6">
          <div className="w-fit h-fit rounded-full border-4 border-white bg-white relative bottom-6">
            <img
              src={profile}
              className="h-32 w-32 rounded-full object-cover"
              alt="Profile Photo"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="flex items-center gap-1 text-lg font-[500]">
              Dr. Bruce Wills{" "}
              <span>
                <img src={verify} className="w-5" alt="" />
              </span>{" "}
            </h3>

            <p className="text-[15px] text-primary font-[500]">Gynecologist</p>

            <p className="text-[#626262] flex gap-1 items-center text-sm mt-2">
              4.2{" "}
              <span className="flex gap-1 -mt-1">
                {[1, 2, 3, 4].map((_, index) => (
                  <img key={index} src={star} className="w-4" alt="" />
                ))}
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-1 justify-evenly">  
            
                <div className="flex flex-col items-center">
                    <p className="text-sm text-primary font-[500]">Followers</p>
                    <p className="text-xl  font-[600]">850</p>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-sm text-primary font-[500]">Following</p>
                    <p className="text-xl  font-[600]">18K</p>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-sm text-primary font-[500]">Posts</p>
                    <p className="text-xl  font-[600]">250</p>
                </div>

        </div>

        <button className="py-3 px-5 text-white bg-primary rounded-md text-[13px] font-[500]">
            Book an Appointment
          </button>
      </div>
    </div>
  );
};

export default Profile;
