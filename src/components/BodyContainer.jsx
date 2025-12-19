import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { mockImageData } from "../utils/mockData";
import Shimmer from "./Shimmer";

const BodyContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="searchbtn"
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
      <div className="filters">
        <button
          className="toprated"
          onClick={() => {
            setRestaurants(
              restaurants.filter((res) => res.info.avgRating > 4.4)
            );
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="restaurantContainer">
        {filteredRestaurants.map((res, index) => (
          <RestaurantCard
            key={res.info.id}
            resData={res.info}
            imageData={mockImageData[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
