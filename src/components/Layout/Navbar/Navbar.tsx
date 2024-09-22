import "./Navbar.css";
import Icons from "../../../../constants";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import SideBar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <SideBar className="hidden lg:flex" />
      <nav className="hidden lg:flex">
        <h1 className="title m-14">HEALTH-TRAK</h1>
        <ul className="pages">
          <Link to='/diary'>
            <button>DIARY</button>
          </Link>
          <Link to='/'>
            <button>DASHBOARD</button>
          </Link>
          <Link to='recipes'>
            <button>RECIPES</button>
          </Link>
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
