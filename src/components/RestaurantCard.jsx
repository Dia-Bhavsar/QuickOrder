import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  if (!resData) return null; // guard against missing prop

  const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData;

  const imageSrc =
    (resData.cloudinaryImageId ? CDN_URL + cloudinaryImageId : null) ||
    "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <div className="p-4 m-4 w-60 border border-solid border-gray-300 rounded-md hover:shadow-lg">
      <img className="rounded-md " src={imageSrc} alt="image-name" />
      <h3 className="font-semibold text-md my-2">{name}</h3>
      <p className="text-sm">
        {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
      </p>
      <p className="text-sm">{avgRating}</p>
      <p className="text-sm">{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
