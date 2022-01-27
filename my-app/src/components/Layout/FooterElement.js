import { Fragment } from "react";

const FooterElement = (props) => {

  return (
    <div className="my-6" >
      <h4 className="font-bold text-2xl" >{props.text}</h4>
      <ul>
        {props.links.map((link) => {
          return <li className="my-4 text-slate-500 font-semibold cursor-pointer" key={link}>{link}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterElement;
