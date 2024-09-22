const FeatureBlog = () => {
  return (
    <div className="my-[30px] px-[30px] md:px-[50px] lg:px-[100px]">
      <h2 className="text-center font-bold text-2xl text-black">
        Featured Blog
      </h2>
      <div className="my-[20px]">
        {/* Blog Featured Itemes */}
        <div className="flex flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-2">
          <div className="flex flex-col px-[10px] py-[10px] border border-slate-400 rounded-lg  `">
            <div className="self-center">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
            <h3 className="px-[10px] my-[10px] font-bold text-lg">
              Blog Title
            </h3>
            <div className=" px-[10px] flex py-[10px] justify-between">
              <div>Author</div>
              <p className="text-sm tracking-tighter ">1 Januari 2020</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
            <div className="flex flex-col px-[10px] py-[10px] border border-slate-400 rounded-lg">
              <div className="self-center">
                <img src="https://via.placeholder.com/300" alt="" />
              </div>
              <h3 className="px-[10px] my-[10px] font-bold text-lg">
                Blog Title
              </h3>
              <div className=" px-[10px] flex py-[10px] justify-between">
                <div>Author</div>
                <p className="text-sm tracking-tighter ">1 Januari 2020</p>
              </div>
            </div>
            <div className="flex flex-col px-[10px] py-[10px] border border-slate-400 rounded-lg">
              <div className="self-center">
                <img src="https://via.placeholder.com/300" alt="" />
              </div>
              <h3 className="px-[10px] my-[10px] font-bold text-lg">
                Blog Title
              </h3>
              <div className=" px-[10px] flex py-[10px] justify-between">
                <div>Author</div>
                <p className="text-sm tracking-tighter ">1 Januari 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlog;
