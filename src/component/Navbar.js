import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["Women", "Men", "Kids", "Home"];
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToLogin = () => {
    if (authenticate) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const logoutUser = () => {
    setAuthenticate(false);
    navigate("/login");
    console.log("logoutclicked");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      console.log("click", event.key);
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`); //change url
    }
  };
  const goToMain = () => {
    navigate("/");
  };
  const sideMenuOpen = () => {
    setIsMenuOpen(true);
    console.log("open");
  };
  const sideMenuClosed = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <FontAwesomeIcon icon={faBars} onClick={sideMenuOpen} />
        <FontAwesomeIcon icon={faSearch} />
        <div>
          {authenticate ? (
            <div className="login-buttonn" onClick={logoutUser}>
              <FontAwesomeIcon icon={faUser} />
              <div>Logout</div>
            </div>
          ) : (
            <div className="login-buttonn" onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <div>Sign In</div>
            </div>
          )}
        </div>
      </div>
      <div className={`mobile-side ${isMenuOpen ? "open" : ""}`}>
        <FontAwesomeIcon icon={faTimes} onClick={sideMenuClosed} />
        <div>
          <ul className="mobile-menu-list">
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {authenticate ? (
          <div className="login-button" onClick={logoutUser}>
            <FontAwesomeIcon icon={faUser} />
            <div>Logout</div>
          </div>
        ) : (
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>Sign In</div>
          </div>
        )}
      </div>

      <div className="nav-section" onClick={goToMain}>
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
          <input
            className="input-box"
            type="text"
            placeholder="Search"
            onKeyDown={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
