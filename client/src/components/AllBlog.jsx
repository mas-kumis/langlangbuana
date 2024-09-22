const AllBlog = () => {
  return (
    <div className="px-[30px] md:px-[50px] lg:px-[100px] my-[30px] font-bold text-xl">
      <h1>All Blog</h1>
      <div className="my-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="font-bold">Blog Title {i}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, tempora.
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm">Read More</p>
                <p className="text-xs">3 min read</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
