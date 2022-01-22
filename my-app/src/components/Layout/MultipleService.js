import Service from "./Service";
import Button from './Button'

import order from "../../assets/order.png";
import kucharz from '../../assets/kucharz.PNG'

const MultipleService = () => {
  return (
    <section className="mt-6">
      <h2 className="font-bold text-3xl mb-4">
        We Are More Than Multiple Service
      </h2>
      <p className="font-semibold pr-6 mb-4">
        This is a type of restaurant which typically serves food and drinks, in
        addition to light refreshemnts such as baked goods or snacks. The term
        comes from the rench word meaning food.
      </p>
      <div className="flex justify-around mb-4">
        <div className="h-36 flex flex-col justify-evenly">
          <Service photo={order} text="Online Order" />
          <Service photo={order} text="Online Order" />
          <Service photo={order} text="Online Order" />
        </div>
        <div className="h-36 flex flex-col justify-evenly">
          <Service photo={order} text="Online Order" />
          <Service photo={order} text="Online Order" />
          <Service photo={order} text="Online Order" />
        </div>
      </div>
      <Button bg={true} text="About Us" special="px-8" />
      <img className="my-4" src={kucharz} />
    </section>
  );
};

export default MultipleService;
