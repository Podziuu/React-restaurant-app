import DishButton from "./DishButton";
import dish from '../../assets/dish.png'
import dishes from '../../assets/dishes.png'
import dessert from '../../assets/dessert.png'
import coffee from '../../assets/coffee.png'
import platter from '../../assets/platter.png'
import snacks from '../../assets/snacks.png'

const Dish = () => {
  return (
    <div className="mt-4 relative">
      <img className="-translate-x-12" src={dish} />
      <div className="absolute top-0 right-0 flex flex-col justify-evenly h-full py-1">
        <DishButton src={dishes} text="Dishes" />
        <DishButton src={dessert} text="Dessert" />
        <DishButton src={coffee} text="Drinks" />
        <DishButton src={platter} text="Platter" />
        <DishButton src={snacks} text="Snacks" />
      </div>
    </div>
  );
};

export default Dish;
