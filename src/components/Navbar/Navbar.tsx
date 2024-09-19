import "./Navbar.css";
import Icons from "../../../constants";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import SideBar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <SideBar className="hidden lg:flex" />
      <nav className="hidden lg:flex">
        <img alt="Logo" className="h-40 w-40 mx-5" />{" "}
        {/* Make sure you have a logo icon */}
        <ul>
          <li>
            <button>SHOP</button>
          </li>
          <li>
            <button>HOME</button>
          </li>
          <li>
            <button>ABOUT US</button>
          </li>
          <li>
            <button>BLOG</button>
          </li>
          <li>
            <Link to="/notifications">
              <img src={Icons.bellIcon} alt="User Icon" className="h-10 w-10" />
            </Link>
          </li>
          <li>
            <Link to="/user/">
              <img
                src={Icons.userIcon}
                alt="User Mobile Icon"
                className="h-10 w-10"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="nav-break" />
      <MobileNavbar className="flex lg:hidden" />
    </>
  );
};

export default Navbar;
