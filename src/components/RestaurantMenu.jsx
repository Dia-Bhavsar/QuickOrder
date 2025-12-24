import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { CDN_URL, MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log("resId", resId);
  const restaurantMenu = useRestaurantMenu(resId);
  console.log("from custom hook", restaurantMenu);
  const { name, costForTwo } =
    restaurantMenu?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card || [];
  console.log("itemCards", itemCards);

  if (!restaurantMenu) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Menu</h1>
      <h2>{name}</h2>
      <p>{costForTwo}</p>
      {/* <img src={CDN_URL + imageId} alt={name} /> */}
      {/* <p>{price / 100 || defaultPrice / 100}</p> */}
      <h3>Menu Items:</h3>
      {itemCards.map((item) => (
        <div className="itemCard" key={item.card.info.id}>
          <div className="itemDetails">
            <h4>{item.card.info.name}</h4>
            <p>
              Price: ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p>{item.card.info.description}</p>
          </div>
          <div className="itemImage">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
