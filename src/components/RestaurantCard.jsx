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
    <div className="restaurantCard">
      <img src={imageSrc} alt="image-name" />
      <h3>{name}</h3>
      <p>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</p>
      <p>{avgRating}</p>
      <p>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
