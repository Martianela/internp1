import React from "react";
let imgURL =
  "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg";
const Card = ({ item }) => {
  return (
    <div>
      <div
        className="object-fit h-[40vh] rounded-sm text-white relative bg-gray-900/30 overflow-hidden"
        key={item.id}
      >
        <img src={imgURL} alt="img" className="w-full h-full" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <h1 className="absolute bottom-2 left-3 text-2xl font-bold">
            {item.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
