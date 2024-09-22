const Jumbotron = () => {
  return (
    <div className="px-[30px] h-[500px] bg-space-2 bg-[url('./jumbotron.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-white text-center">
          Explore the World of Stories
        </h1>
        <p className="text-white px-[10px] text-center">
          Bring your Experience to Our Travel Guide
        </p>
        <div className="py-[20px] flex space-x-8">
          <button className="bg-slate-900 hover:bg-white hover:text-slate-900  text-white font-bold text-lg  px-8 py-2 rounded-md">
            Subscribe Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
