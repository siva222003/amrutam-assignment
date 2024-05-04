import reviewuser from "../../assets/images/reviewuser.png";
import star from "../../assets/images/star.svg";

const Reviews = () => {
  return (
    <div className="border-[1px] border-[#DCDCDC] rounded-lg mt-6">
      <div className="rounded-t-lg aboutBg  flex px-4 py-2 items-center">
        <h1 className="text-[#313131] text-xl">Featured Reviews (102)</h1>
      </div>

      <div className=" w-[88%] mx-auto my-5 flex flex-col gap-4">


        <div className="bg-[#FAFAFA] rounded-lg p-4 flex flex-col gap-4">
          <div className="flex gap-32">
            <div className="flex gap-2 items-center">
              <div className="">
                <img
                  src={reviewuser}
                  className="w-12 h-12 object-cover rounded-full"
                  alt=""
                />
              </div>

              <div className="flex flex-col justify-between">
                <h4 className="text-[#333548] text-lg">Alicent Hightower</h4>
                <p className="text-[#33354880] text-sm">
                  Consulted for Skin care
                </p>
              </div>
            </div>

            <h3 className="text-[#333548B5]">20 January 2023</h3>
          </div>
          <span className="flex gap-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <img key={index} src={star} className="w-4" alt="" />
            ))}
          </span>{" "}
          <p className="text-sm font-light">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </div>

        <div className="bg-[#FAFAFA] rounded-lg p-4 flex flex-col gap-4">
          <div className="flex gap-32">
            <div className="flex gap-2 items-center">
              <div className="">
                <img
                  src={reviewuser}
                  className="w-12 h-12 object-cover rounded-full"
                  alt=""
                />
              </div>

              <div className="flex flex-col justify-between">
                <h4 className="text-[#333548] text-lg">Alicent Hightower</h4>
                <p className="text-[#33354880] text-sm">
                Consulted for Pregnancy
                </p>
              </div>
            </div>

            <h3 className="text-[#333548B5]">20 January 2023</h3>
          </div>
          <span className="flex gap-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <img key={index} src={star} className="w-4" alt="" />
            ))}
          </span>{" "}
          <p className="text-sm font-light">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </div>


      </div>
    </div>
  );
};

export default Reviews;
