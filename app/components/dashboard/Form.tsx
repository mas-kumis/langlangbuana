import React from "react";

type ListProps = {
  title: string;
};
const ListForm = (props: ListProps) => {
  return (
    <div className="">
      <div>
        <h4 className="text-3xl font-bold text-blue-950 italic">
          {props.title}
        </h4>
        <form className="flex-col flex space-y-4 w-[400px] my-4">
          <textarea
            className="w-[400px] py-2 px-2 rounded-md border  border-gray-400 resize-y "
            placeholder="Enter Title"
          />
          <input
            className="w-[400px] py-2 px-2 rounded-md border border-gray-400"
            type="text"
            placeholder="Enter Price"
          />
          <textarea
            className="w-[400px] py-2 px-2 min-h-[300px] rounded-md border  border-gray-400 resize-y "
            placeholder="Enter Title"
          />
          <button
            className="bg-yellow-400 px-4  py-2 rounded-xl font-bold hover:bg-yellow-500"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListForm;
