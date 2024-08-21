import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuList = ["Women", "Men", "Kids", "Home"];
  return (
    <div>
      <div>
        <Link to="/login">
          <div className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <div>Login</div>
          </div>
        </Link>
      </div>

      <div className="nav-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpRqYm8ZV9DX0FdTQzy6Lpcm6GMKfBbNO7Q&s"
          alt="clothes"
          width={100}
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="input-area">
          <FontAwesomeIcon icon={faSearch} />
          <input className="input-box" type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
