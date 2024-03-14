import { memo } from "react";

import "./homePage.scss";

import aboutBg from "assets/users/images/background/about-bg.jpg";

const HomePage = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="section__title">
              <h2 data-title="Câu chuyện">Về chúng tôi</h2>
            </div>
          </div>

          <div className="row">
            <div className="about__item">
              <h2>CHÀO MỪNG BẠN ĐẾN VỚI THAI RESTAURANT</h2>
              <p>
                Thai Restaurant – Authentic Thai Eatery là chuỗi nhà hàng Chuẩn
                Thái – Đậm Vị với nền văn hóa ẩm thực đa dạng và phong phú của
                Thái Lan. Bắt nguồn từ thành phố Đà Nẵng, Thai Restaurant đã
                trải qua 10 năm hình thành và phát triển, từ một nhà hàng nhỏ
                đến một chuỗi nhà hàng ẩm thực Thái lớn mạnh, với mặt bằng rộng
                khắp và dịch vụ chất lượng.
                <br /> <br />
                Với sứ mệnh mang hương vị Thái Lan đến gần hơn với mọi người,
                Thai Restaurant đã vươn mình trở thành chuỗi nhà hàng ẩm thực
                Thái đầu tiên có mặt tại 03 thành phố lớn nhất trên cả nước,
                đồng thời tiếp tục phát triển và mở rộng hơn nữa trong tương
                lai. Chúng tôi hy vọng được chào đón bạn tới thưởng thức và trải
                nghiệm những hương vị đặc trưng của Thái Lan tại Thai
                Restaurant!
              </p>
              <button className="btn">XEM MENU</button>
            </div>
            <div className="about__item">
              <div className="about__item__img">
                <span>Hơn 10 năm kinh nghiệm</span>
                <img src={aboutBg} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(HomePage);
