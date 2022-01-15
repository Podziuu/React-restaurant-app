const Button = (props) => {
    const btnClasses = props.circle ? 'p-3' : 'px-4 py-3'
    const btnBg = props.bg ? 'bg-amber-400' : ''

  return (
    <button className={`border-2 rounded-full border-amber-400 font-bold text-[#332313] ${btnClasses} ${btnBg}`}>
      {props.text || <img className="w-6" src={props.img} />}
    </button>
  );
};

export default Button;
