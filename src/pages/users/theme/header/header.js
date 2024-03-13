import { memo } from "react";
import "./header.scss";
import { AiOutlineMenu } from "react-icons/ai";

import logo from "assets/users/images/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const menuBar = document.querySelector(".header__menu");
  menuBar.addEventListener("click", function () {
    menuBar.classList.toggle("active");
    document.querySelector(".header__menu__items").classList.toggle("active");
  });

  return (
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__menu">
            <AiOutlineMenu />
          </div>
          <div className="header__menu__items">
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

export default memo(Header);
