import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API_URL } from "../utils/constants";

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
          <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
