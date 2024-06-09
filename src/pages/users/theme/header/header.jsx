import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "assets/users/images/logo/logo.jpg";
import "./header.scss";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const x = window.pageYOffset;
      const topElement = document.querySelector(".top");
      if (topElement) {
        if (x > 80) {
          topElement.classList.add("active");
        } else {
          topElement.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Xóa bộ lắng nghe khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="top">
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
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="header__menu__item">
                  <a href="#about">Về chúng tôi</a>
                </li>
                <li className="header__menu__item">
                  <a href="#menu">Thực đơn</a>
                </li>
                <li className="header__menu__item">
                  <a href="#feedback">Phản hồi</a>
                </li>
                <li className="header__menu__item">
                  <a href="#team">Nhân sự</a>
                </li>
                <li className="header__menu__item">
                  <a href="#footer">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="header__image">
        <div
          className="header__image__content"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2>Nhà hàng Thai Restaurant</h2>
          <p>
            Đẳng cấp lên ngôi, vị ngọt đôi môi, niềm vui ngóng chờ giây phút thơ
            mộng
          </p>
          <button className="header__image__content__btn btn">MENU</button>
        </div>
      </section>
    </>
  );
};

export default Header;
