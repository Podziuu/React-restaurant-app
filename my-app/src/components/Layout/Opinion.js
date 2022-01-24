import avatar from "../../assets/man.png";

const Opinion = (props) => {
  return (
    <div className="bg-[#fff1de] p-8 rounded-2xl">
      <p className="text-slate-700 font-semibold">
        "This place is great! Atmosphere is chill and cool but the staff is also
        really friendly. They know what ther're doing and what ther're talking
        about, and you can tell making the customers happy is their main
        priority."
      </p>
      <img className="w-12 my-4" src={avatar} />
      <h3 className="font-bold text-xl">Jan Kowalski</h3>
    </div>
  );
};

export default Opinion;
