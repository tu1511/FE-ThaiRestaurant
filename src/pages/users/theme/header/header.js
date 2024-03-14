import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "assets/users/images/logo/logo.jpg";
import "./header.scss";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__menu" onClick={toggleMenu}>
            {isMenuActive ? (
              <AiOutlineClose className="svg-icon" />
            ) : (
              <AiOutlineMenu className="svg-icon" />
            )}
          </div>
          <div
            className={`header__menu__items ${isMenuActive ? "active" : ""}`}
          >
            <ul>
              <li className="header__menu__item">
                <Link to={""}>Trang chủ</Link>
              </li>
              <li className="header__menu__item">
                <Link to={""}>Về chúng tôi</Link>
              </li>
              <li className="header__menu__item">
                <Link to={""}>Thực đơn</Link>
              </li>
              <li className="header__menu__item">
                <Link to={""}>Phản hồi</Link>
              </li>
              <li className="header__menu__item">
                <Link to={""}>Nhân sự</Link>
              </li>
              <li className="header__menu__item">
                <Link to={""}>Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
