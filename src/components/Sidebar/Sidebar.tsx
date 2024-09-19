import { Link } from "react-router-dom";
import Icons from "../../../constants";
import "./Sidebar.css";
import useSidebarToggle from "../../hooks/useSidebarToggle";

interface Props {
  className?: string;
}

export default function SideBar({ className }: Props) {
  useSidebarToggle("sidebar-menu-btn", "side-bar");

  return (
    <div className={className}>
      <button id="sidebar-menu-btn" className="sidebar-menu-btn">
        <img src={Icons.sideBarMenu} className="h-14 w-14" />
      </button>
      <div id="side-bar" className="side-bar">
        <div className="side-bar-content">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search..."
              className="search-input font-light text-sm"
            />
          </form>
          <div className="dropdown">
            <Link to="/store/products" className="flex items-center">
              <img src={Icons.storeIcon} className="w-12 h-8" />
              <span>Shop</span>
            </Link>
            <div className="dropdown-content">
              <Link to="/store/products/new-arrivals">
                <img src={Icons.shopIcon} className="w-12 h-8" />
                <span>New Collection</span>
              </Link>
              <Link to="/store/products/special-offers">
                <img src={Icons.promotionShopIcon} className="w-12 h-8" />
                <span>Special Offers</span>
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/orders" className="flex items-center">
              <img src={Icons.ordersIcon} className="w-12 h-8" />
              <span>My Orders</span>
            </Link>
            <div className="dropdown-content">
              <Link to="/orders/status" className="flex items-center">
                <img src={Icons.orderStatus} className="w-12 h-8" />
                <span>Order Status</span>
              </Link>
              <Link to="/orders/track" className="flex items-center">
                <img src={Icons.shippingIcon} className="w-12 h-8" />
                <span className="whitespace-nowrap">Track Shipping</span>
              </Link>
            </div>
          </div>
          <Link to="/cart" className="flex items-center">
            <img src={Icons.cartIcon} className="w-12 h-8" />
            <span>My Cart</span>
          </Link>
          <Link to="/help" className="flex items-center">
            <img src={Icons.supportIcon} className="w-12 h-8" />
            <span>Support</span>
          </Link>
          <Link to="/contact" className="flex items-center">
            <img src={Icons.commIcon} className="w-12 h-8" />
            <span>Contact Us</span>
          </Link>
          <hr />
          <Link to="/settings" className="flex items-center">
            <img src={Icons.settingIcon} className="w-12 h-8" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
