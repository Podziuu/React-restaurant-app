import chef from "../../assets/Chef.jpg";

const Chef = (props) => {
  return (
    <div className="my-6">
      <img className="rounded-xl w-72 m-auto" src={chef} />
      <h3 className="font-semibold text-center text-2xl my-4">Jan Kowalski</h3>
    </div>
  );
};

export default Chef;
