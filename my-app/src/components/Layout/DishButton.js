const DishButton = (props) => {
  return (
    <button className="flex bg-white shadow-black rounded-full justify-evenly items-center font-bold text-sm p-2">
      <img className="w-8 h-8 border rounded-full bg-cover bg-center" src={props.src} />{" "}
      {props.text}
    </button>
  );
};

export default DishButton;
