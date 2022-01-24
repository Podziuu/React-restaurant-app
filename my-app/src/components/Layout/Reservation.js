import Button from "./Button";
import dish2 from "../../assets/dish2.PNG";

const Reservation = () => {
  return (
    <section className="my-6">
      <h2 className="font-bold text-3xl">Do You Have Any Dinner Plan Today? Reserve <br/> Your Table</h2>
      <p className="text-slate-500 font-semibold my-8">
        Make online reservations, read restaurant reviews from diners, and earn
        points towards free meals. OpenTable is a real-time online reservation.
      </p>
      <Button bg={true} text="Make Reservation" />
      <img className="my-6" src={dish2} />
    </section>
  );
};

export default Reservation;
