import Logo from "../../assets/logo2.png";

const Navbar = () => {
  return (
    <div className=" shadow-xl flex flex-none px-20 py-3 justify-between text-lg text-concrete-900">
      <img
        src={Logo}
        alt="Festivo logo"
        className="flex-shrink-0 h-20 w-20 rounded-2xl"
      />
      <div className="text-md flex items-center">
        <div className="quicklinks flex gap-7 ">
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
        <button
          className="border ring-2 ring-ring-color border-none border-concrete-950 
          rounded w-30 h-10 ml-5 bg-white
         transition ease-in hover:text-concrete-50 hover:bg-concrete-950 "
        >
          Login
        </button>
        <button
          className="border ring-2 ring-ring-color border-none border-concrete-950
            rounded w-30 h-10 ml-5 bg-white
         transition ease-in hover:text-concrete-50 hover:bg-concrete-950 "
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
