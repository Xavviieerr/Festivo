import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";

const Navbar = () => {
  return (
    <div className=" shadow-xl flex flex-none px-20 py-3 justify-between text-lg text-concrete-900">
      <img
        src={Logo}
        alt="Festivo logo"
        className="flex-shrink-0 h-20 w-20 rounded-2xl"
      />
      <div className="quicklinks flex gap-7 items-center">
        <a className="hover:text-ring-color" href="">
          Home
        </a>
        <a className="hover:text-ring-color" href="">
          About
        </a>
        <a className="hover:text-ring-color" href="">
          How It Works
        </a>
        <a className="hover:text-ring-color" href="">
          Pricing
        </a>
      </div>
      <div className="text-md flex items-center">
        <Link to="/auth">
          <button
            className=" text-white text-lg bg-ring-color rounded-full w-44 h-12
                    hover:bg-white shadow-md transition ease-in hover:text-ring-color"
          >
            Get Started! 🎁
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
