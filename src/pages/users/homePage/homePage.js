import React, { memo } from "react";
import "./homePage.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import aboutBg from "assets/users/images/background/about-bg.jpg";
import { formatter } from "utils/formatter";
import { Link } from "react-router-dom";

import food1Img from "assets/users/images/food/food1Img.jpg";
import food2Img from "assets/users/images/food/food2Img.jpg";
import food3Img from "assets/users/images/food/food3Img.jpg";
import food4Img from "assets/users/images/food/food4Img.jpg";
import food5Img from "assets/users/images/food/food5Img.jpg";
import food6Img from "assets/users/images/food/food6Img.jpg";
import food7Img from "assets/users/images/food/food7Img.jpg";
import food8Img from "assets/users/images/food/food8Img.jpg";
import food9Img from "assets/users/images/food/food9Img.jpg";
import food10Img from "assets/users/images/food/food10Img.jpg";

const HomePage = () => {
  const featProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: food1Img,
          name: "Yam talay (Salad hải sản cay)",
          price: 100000,
        },
        {
          img: food2Img,
          name: "Yam pla dook foo",
          price: 70000,
        },
        {
          img: food3Img,
          name: "Som tam",
          price: 99000,
        },
        {
          img: food4Img,
          name: "Tom kha gai",
          price: 69000,
        },
        {
          img: food5Img,
          name: "Pad krapow (Húng quế chiên)",
          price: 690000,
        },
        {
          img: food6Img,
          name: "Khao Neow Dam Sang Kaya",
          price: 39000,
        },
        {
          img: food7Img,
          name: "Salapao",
          price: 69000,
        },
        {
          img: food8Img,
          name: "Nam Tao Hu",
          price: 49000,
        },
        {
          img: food9Img,
          name: "Trà sữa matcha",
          price: 69000,
        },
        {
          img: food10Img,
          name: "Cà phê capuchino",
          price: 69000,
        },
      ],
    },
  };

  const FeaturedProducts = ({ data }) => {
    const renderProductList = () => (
      <div className="row justify-content">
        {Object.keys(data).map((key, index) => (
          <div className="food__items" key={index}>
            <div className="row">
              {data[key].products.map((item, j) => (
                <div className="col-lg-6 food__item" key={j}>
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                  <div className="food__price">
                    <h4>{formatter(item.price)}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <>
        {/* Kiểm tra điều kiện để render một trong hai */}
        {data ? renderProductList() : null}
      </>
    );
  };

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

      <section className="menu">
        <div className="container">
          <div className="row">
            <div className="section__title">
              <h2 data-title="Đặt ngay">Thực đơn</h2>
            </div>
          </div>
          <div className="row">{/* Phần menu */}</div>

          {/* Phần danh sách sản phẩm */}
          <FeaturedProducts data={featProducts} />
        </div>
      </section>
    </>
  );
};

export default memo(HomePage);
