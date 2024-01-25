import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Hamburger from "hamburger-react";
import "./Navbar.css";
import user, { logoutUser } from "../Pages/redux/user";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function MyNavbarT() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    if (user?.name) {
      console.log("if cond", user.name);
      dispatch(logoutUser());
    } else {
      console.log("else cond", user);
      navigate("/login");
    }
  };

  const [collapsed, setCollapsed] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="margin-top">
      <Navbar className="nav-bg-color" expand="md">
        <NavbarBrand tag={Link} to="/" className="me-auto">
          <img className="" src="/BOSHOP images/nav-logo.svg" alt="logo" />
        </NavbarBrand>

        {/* Conditionally render Hamburger only on small screens */}
        {isSmallScreen && (
          <Hamburger
            toggled={!collapsed}
            toggle={toggleNavbar}
            size={32}
            color="black"
            duration={0.1}
            className="hamburger-react"
          />
        )}

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="navbar-text">
            <NavItem>
              <Link to="/" className="nav_link text-color ms-lg-5">
                HOME
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/pages" className="nav_link text-color">
                PAGES
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav_link text-color">
                ABOUT
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/collection" className="nav_link text-color">
                COLLECTION
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/mega store" className="nav_link text-color">
                MEGA STORE
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav_link text-color">
                CONTACT
              </Link>
            </NavItem>

            <NavItem>
              <Link
                onClick={handleClick}
                className="nav_link text-color nav-icon-color"
                to="/login"
              >
                <i className="fa-solid fa-user"></i>
                {user.name ? "logout" : "login"}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav_link text-color nav-icon-color" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>Cart
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav_link text-color text-center" to="/button">
                {/* {user.name} is logged in */}
                {user.name && `${user.name} is logged in`}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbarT;
