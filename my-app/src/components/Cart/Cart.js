import { useDispatch, useSelector } from "react-redux";

import close from "../../assets/close.png";
import { uiActions } from "../../store/ui-slice";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  console.log(items);

  const closeCart = () => {
    dispatch(uiActions.closeCart());
  };

  return (
    <div className="w-screen h-screen fixed top-0 bg-black/[.4] backdrop-blur-sm z-50 p-6">
      <div className="bg-white w-full h-full border-yellow-900 border-4 rounded-3xl p-4 pt-12">
        <img
          onClick={closeCart}
          className="w-6 right-10 top-10 absolute cursor-pointer"
          src={close}
        />
        <div className="flex flex-col justify-center items-center">
          {items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
