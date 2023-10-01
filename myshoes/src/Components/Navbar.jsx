import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  console.log(navLinks);
  return (
    <header className="padding-inline py-8 absolute z-10 w-full">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={30} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((ele) => (
            <li key={ele.label}>
              <a
                href={ele.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {ele.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
