const Concerns = () => {
  return (
    <div className="border border-[#DCDCDC] rounded-lg mt-6">
      <div className="rounded-t-lg aboutBg justify-between flex px-4 py-2 items-center">
        <h1 className="text-[#313131] text-xl">The Concerns I Treat</h1>
      </div>
      <div className=" w-[90%] mx-auto flex flex-wrap items-center gap-3 my-5 text-primary text-sm font-[500]">
        <h3 className="py-2 px-4 rounded-2xl bg-[#2E37A40A]">Skin Treatment</h3>
        <h3 className="py-2 px-4 rounded-2xl bg-[#2E37A40A]">Pregnancy</h3>
        <h3 className="py-2 px-4 rounded-2xl bg-[#2E37A40A]">Period Doubts</h3>
        <h3 className="py-2 px-4 rounded-2xl bg-[#2E37A40A]">Endometriosis</h3>
        <h3 className="py-2 px-4 rounded-2xl bg-[#2E37A40A]">Pelvic Pain</h3>
        <h3 className="py-2 px-4 rounded-2xl bg-[#2E37A40A]">Ovarian Cysts</h3>

        <button className="py-2 px-4  text-primary border-[#E0DFDF] border rounded-2xl text-[13px] font-[600]">
          +5 More
        </button>
      </div>
    </div>
  );
};

export default Concerns;
