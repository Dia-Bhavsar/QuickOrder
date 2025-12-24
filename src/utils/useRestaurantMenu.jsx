import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [RestaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(MENU_API_URL + resId);
    setRestaurantMenu(await res.json());
  };
  return RestaurantMenu;
};

export default useRestaurantMenu;
