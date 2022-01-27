const SocialMedia = (props) => {
  return (
    <div className="w-10 rounded-full p-2 border border-amber-800 cursor-pointer">
      <img src={props.photo} />
    </div>
  );
};

export default SocialMedia;
