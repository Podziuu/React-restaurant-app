const Service = (props) => {
  return (
    <div className="flex items-center">
      <img className="w-8 rounded-full border-2 border-dashed border-gray-800 box-border" src={props.photo} />
      <h4 className="font-bold ml-2">{props.text}</h4>
    </div>
  );
};

export default Service;
