const CartItem = (props) => {
  return (
    <div className="flex items-center w-full my-2">
      <img className="w-16 rounded-lg" src={props.item.photo} />
      <div className="flex flex-col justify-center ml-4 w-full">
        <h3>{props.item.name}</h3>
        <div className="flex justify-between">
          <p>Stock: {props.item.quantity}</p>
          <p>Price: {props.item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
