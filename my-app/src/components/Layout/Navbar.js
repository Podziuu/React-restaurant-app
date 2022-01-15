import { useState } from "react";

import Button from "./Button";

const Navbar = () => {
  const [hamVisible, setHamVisible] = useState(false);

  const clickHandler = () => {
    setHamVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <header>
      <nav className="h-16 flex px-4 justify-between">
        <div className="flex items-center">
          <img
            className="w-12"
            src="https://cdn-icons-png.flaticon.com/512/3170/3170733.png"
          />
          <h1 className="font-bold text-2xl text-[#332313] ml-2">Bites</h1>
        </div>
        <div className="flex items-center">
          {!hamVisible && (
            <img
              className="w-8 cursor-pointer"
              src="https://cdn-icons.flaticon.com/png/512/6015/premium/6015685.png?token=exp=1642264103~hmac=b192c332ab011c133a857dcc03e59de3"
              onClick={clickHandler}
            />
          )}
          {hamVisible && (
            <ul className="w-screen flex flex-col items-center absolute top-16 left-0 bg-[#faebd4] py-4 font-bold justify-evenly h-96">
              <li onClick={clickHandler} className="absolute w-6 top-4 right-4 cursor-pointer"><img src="https://cdn-icons.flaticon.com/png/512/2549/premium/2549969.png?token=exp=1642265912~hmac=4266f3f56ccaaef72b0699244c29cfe3" /></li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Reviews</li>
              <li>Blog</li>
              <li>Reviews</li>
              <li>
                <Button
                  circle={true}
                  img="https://cdn-icons.flaticon.com/png/512/2662/premium/2662503.png?token=exp=1642264813~hmac=21d925324f339b0ab25d361e75556373"
                />
              </li>
              <li>
                <Button bg={true} text="Reserve Table" />
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
