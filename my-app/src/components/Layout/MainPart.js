import Button from "./Button";
import Dish from "./Dish";

const MainPart = () => {
  return (
    <div className="pt-8">
      <h2 className="text-4xl font-bold">We Serve The Test You Love 😍</h2>
      <p className="text-slate-500 my-7">
        This is a type of restaurant which typically serves food and drinks, in
        addition to light refreshemnts such as baked goods.
      </p>
      <Button bg={true} text="Explore Food" />
      <Dish/>
    </div>
  );
};

export default MainPart;
