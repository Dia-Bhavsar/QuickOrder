import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { CDN_URL, MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const restaurantMenu = useRestaurantMenu(resId);

  const { name, costForTwo, cuisines } =
    restaurantMenu?.data?.cards[2]?.card?.card?.info || {};
  const itemCategory =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c?.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  if (!restaurantMenu) {
    return <Shimmer />;
  }

  return (
    <div className="w-4/6 mx-auto p-4 my-4">
      <div className="m-2 font-bold text-center">
        <h2 className="mb-2">{name}</h2>
        <p>
          {cuisines.join(", ")} - {costForTwo}
        </p>
      </div>

      {/* Catergory Accordion*/}
      <div className="cat ">
        {itemCategory.map((category, index) => (
          <ResCategory
            key={category.card.card.title}
            resData={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
