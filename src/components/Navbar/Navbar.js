import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { assets, socials } from "./NavAssets";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  // toggle setting
  const [isOpen, setIsOpen] = useState(true);

  const navMenuOpenHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navMenuCloseHandler = () => {
    setIsOpen(true);
  };
  const NavMenuClass = isOpen
    ? classes.links
    : classes.links + " " + classes.active;
  return (
    <nav className={classes.container}>
      <div className={classes.logo_div}>
        <span className={classes.logo}>D</span>
      </div>
      <div className={NavMenuClass}>
        
          {assets.map((asset) => {
            return (
              <li
                key={asset.id}
                className={classes.navLink}
                onClick={navMenuCloseHandler}
                activeclass={classes.navLink + " " + classes.open}
              >
                <Link to="/">
                  {asset.title}
                </Link>
              </li>
            );
          })}
      </div>

      <div className={classes.socials}>
        {socials.map((social) => {
          return (
            <div className={classes.social} key={social.id}>
              {social.icon}
            </div>
          );
        })}
      </div>

      <div className={classes.toggle} onClick={navMenuOpenHandler}>
        {isOpen ? <VscThreeBars /> : <FaTimes />}
      </div>
    </nav>
  );
};

export default Navbar;
