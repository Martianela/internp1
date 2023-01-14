import React from "react";
import feedImage from "../resorces/feedimage.jpg";
const Feed = ({ data }) => {
  const { title, description } = data;
  return (
    <div>
      <img
        className="w-full object-cover max-h-[60vh]"
        src={feedImage}
        alt=""
      />
      <div className="my-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <br />
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Feed;
