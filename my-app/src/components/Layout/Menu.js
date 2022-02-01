import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import PopularDish from "./PopularDish";
import spaghetti from "../../assets/spaghetti.png";

const Menu = () => {
  const [currentTypeOfMenu, setCurrentTypeOfMenu] = useState("Italian");
  const [currentMenu, setCurrentMenu] = useState([]);

  const clickHandler = (e) => {
    setCurrentTypeOfMenu(e.target.value);
  };

  useEffect(() => {
    const getMenu = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${currentTypeOfMenu}`
      );
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      const loadedMenu = [];

      data.meals.map((meal) => {
        if(loadedMenu.length === 8) {
          return;
        }
        const menu = {
          name: meal.strMeal,
          photo: meal.strMealThumb,
          id: meal.idMeal,
        };
        loadedMenu.push(menu);
      });
      setCurrentMenu(loadedMenu)
    };
    getMenu();
  }, [currentTypeOfMenu]);

  return (
    <section>
      <div className="flex justify-between w-full">
        <h2 className="font-bold text-3xl">
          Our Regular <br /> Menu Pack
        </h2>
        <select
          name="menu"
          className="font-bold text-lg border-amber-400 border-2 rounded-full px-6 py-2"
          defaultValue="Italian"
          onChange={clickHandler}
        >
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Canadian">Canadian</option>
          <option value="Japanese">Japanese</option>
        </select>
      </div>
      <Swiper
        spaceBetween={200}
        slidesPerView={1}
        navigation={true}
        centeredSlides={true}
      >
        {currentMenu.map(meal => {
          return (
            <SwiperSlide key={meal.id}>
              <PopularDish photo={meal.photo} text={meal.name} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Menu;
