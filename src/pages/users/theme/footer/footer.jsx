import { memo } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

import "./footer.scss";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer__bg"></div>
        <div className="container">
          <div className="row justify-content">
            <div className="footer__item">
              <h2>Địa chỉ</h2>
              <p>
                89, Trần Hưng Đạo <br />
                Ninh Kiều, Cần Thơ
              </p>
            </div>
            <div className="footer__item">
              <h2>Giờ mở cửa</h2>
              <p>
                9:30 - 23:30 <br />
                All Day
              </p>
            </div>
            <div className="footer__item footer__item__final">
              <h2>Liên hệ với chúng tôi</h2>
              <p>
                Phone: 0337731011
                <br />
                Email: minhtu15112k3@gmail.com
              </p>
              <div className="footer__socials">
                <Link
                  to={
                    "https://www.facebook.com/profile.php?id=100018975219672&locale=vi_VN"
                  }
                >
                  <AiOutlineFacebook />
                </Link>
                <Link to={"https://github.com/tu1511"}>
                  <AiOutlineGithub />
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/t%E1%BB%A9-minh-3277022a6/"}
                >
                  <AiOutlineLinkedin />
                </Link>
                <Link to={"#"}>
                  <AiOutlineInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer__copyright">
            &copy;2024 - Bản quyền thuộc về NMTu
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Footer);
