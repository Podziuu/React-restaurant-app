import arrow from "../../assets/right-arrow.png";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import SocialMedia from "./SocialMedia";
import FooterElement from "./FooterElement";

const Footer = () => {
  return (
    <footer className="my-10">
      <div className="flex items-center border-b-2 border-slate-400 pb-4">
        <img
          className="w-12"
          src="https://cdn-icons-png.flaticon.com/512/3170/3170733.png"
        />
        <h1 className="font-bold text-2xl text-[#332313] ml-2">Bites</h1>
      </div>
      <div className="my-4">
        <h3 className="font-bold text-3xl">Subscribe Our Newsletter</h3>
        <form>
          <input
            className="border-b-2 border-slate-400 w-56 bg-[#F9F3EA] focus:border-black focus:outline-0"
            type="email"
            placeholder="Enter Your Email"
          />
          <button
            onClick={(e) => e.preventDefault()}
            className="w-10 bg-amber-400 rounded-full p-3 ml-2"
            type="submit"
          >
            <img src={arrow} />
          </button>
        </form>
        <div className="flex justify-between w-56 mt-2">
          <SocialMedia photo={fb} />
          <SocialMedia photo={twitter} />
          <SocialMedia photo={instagram} />
          <SocialMedia photo={youtube} />
        </div>
        <div>
          <FooterElement text="Service" links={['Online Order', 'Pre-Reservation', '24/7 Services', 'Foodie Place', 'Super Chefs']} />
          <FooterElement text="Quick Links" links={['Menu', 'Reviews', 'Blogs', 'Reserve Table', 'Order Foods']} />
          <FooterElement text="About" links={['Our Story', 'Benefits', 'Career', 'Our Chefs']} />
          <FooterElement text="Help" links={['Contact', 'Support', 'FAQ']} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
