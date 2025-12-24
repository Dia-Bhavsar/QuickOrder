import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_API_URL);
    const json = await response.json();

    setRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const onlineStatus = useOnlineStatus();
  console.log("use online Status", onlineStatus);
  if (onlineStatus === false) {
    return <h1>You are offline!! Please check your internet connection</h1>;
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body my-4 px-2">
      <div className="search-container flex justify-evenly mb-4">
        <div className="filters">
          <button
            className=" border border-black p-2 rounded-md yellow-600 bg-yellow-600 w-48"
            onClick={() => {
              setRestaurants(
                restaurants.filter((res) => res.info.avgRating > 4.4)
              );
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="flex px-2 mx-2 ">
          <input
            type="text"
            className="p-2 border border-solid border-black rounded-md w-96"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-2 m-2 bg-green-100 rounded-md w-24 border border-black"
            onClick={() => {
              const filteredRestaurants = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestaurants);
              setFilteredRestaurants(filteredRestaurants);
            }}
            value={searchText}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((res, index) => (
          <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
