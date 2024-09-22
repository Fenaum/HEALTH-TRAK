"use client";

import { Link } from "react-router-dom";
import Icons from "../../../../constants";
import "./Navbar.css";
import { useState } from "react";

interface Props {
  className?: string;
}

const MobileNavbar = ({ className }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex justify-between ${className}`}>
      <div>
        <button
          onClick={handleClick}
          className={`NavMenu-button ${isMenuOpen ? "rotate" : ""}`}
        >
          <img src={Icons.menuIcon} className="w-12 h-12 m-5" />
        </button>
        <ul className={`NavMenu-items first-item ${isMenuOpen ? "show" : ""}`}>
          <div className="menu-break" />
          <li>
            <Link onClick={handleClick} to="/store/products">
              ALL PRODUCTS
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/store/products/new-arrivals">
              NEW COLLECTION
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/store/products/special-offers">
              SPECIAL OFFERS
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/orders">
              ORDER STATUS
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/orders/shipping/">
              TRACK SHIPPING
            </Link>
          </li>
          <hr className="menu-line-break" />
          <li>
            <Link onClick={handleClick} to="/about">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/help">
              SUPPORT
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/contact">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/">
        <img alt="Logo" className="h-24 w-24" />
      </Link>
      <div className="flex ">
        <Link to="/store">
          <img src={Icons.storeIcon} className="w-10 h-10 m-1" />
        </Link>
        <Link to="/cart">
          <img src={Icons.cartIcon} className="w-11 h-11 m-1" />
        </Link>
        <Link to="/user/">
          <img src={Icons.userMobileIcon} className="w-10 h-10 m-1" />
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
