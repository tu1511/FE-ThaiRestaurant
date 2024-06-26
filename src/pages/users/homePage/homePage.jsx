import React, { memo } from "react";
import "./homePage.scss";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { formatter } from "utils/formatter";
import { Link } from "react-router-dom";

import { GoStarFill } from "react-icons/go";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import aboutBg from "assets/users/images/background/about-bg.jpg";
import foodSpe1Img from "assets/users/images/anime/ahihi.jpg";
import foodSpe2Img from "assets/users/images/anime/naruto.jpg";
import foodSpe3Img from "assets/users/images/anime/luffy.jpg";
import Staff1Img from "assets/users/images/anime/sanji.jpg";
import Staff2Img from "assets/users/images/anime/souma.jpg";

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
  const foodProducts = {
    all: {
      title: "Tất cả",
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
    lunch: {
      title: "Trưa",
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
      ],
    },
    dinner: {
      title: " Chiều tối",
      products: [
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
      ],
    },
    drinks: {
      title: "Đồ uống",
      products: [
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
    desserts: {
      title: "Điểm tâm",
      products: [
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
      ],
    },
  };

  const renderFoodProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      const products = data[key].products;

      for (let i = 0; i < products.length; i += 2) {
        tabPanel.push(
          <div className="row" key={i}>
            <div className="col-lg-6 col-md-12 col-xs-12">
              {/* Di chuyển lớp ra khỏi vòng lặp */}
              <div className="food__items">
                <div className="food__item">
                  <img src={products[i].img} alt={products[i].name} />
                  <p>{products[i].name}</p>

                  <div className="food__price">
                    <h4>{formatter(products[i].price)}</h4>
                  </div>
                </div>
              </div>
            </div>
            {products[i + 1] && (
              <div className="col-lg-6 col-md-12 col-xs-12">
                {/* Lớp áp dụng cho cả sản phẩm thứ hai */}
                <div className="food__items">
                  <div className="food__item">
                    <img src={products[i + 1].img} alt={products[i + 1].name} />
                    <p>{products[i + 1].name}</p>
                    <div className="food__price">
                      <h4>{formatter(products[i + 1].price)}</h4>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }

      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => (
          <TabPanel key={key}>{item}</TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {/* about */}
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="section__title">
              <h2 data-title="Câu chuyện">Về chúng tôi</h2>
            </div>
          </div>

          <div className="row">
            <div
              className="about__item"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
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
              <button className="btn">
                <a href="#menu">XEM MENU</a>
              </button>
            </div>
            <div
              className="about__item"
              data-aos="fade-up-left"
              data-aos-duration="1500"
            >
              <div className="about__item__img">
                <span>Hơn 10 năm kinh nghiệm</span>
                <img src={aboutBg} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* menu */}
      <section className="menu" id="menu">
        <div className="container">
          <div className="menu__food">
            <div className="section__title">
              <h2 data-title="Đặt ngay">Thực đơn</h2>
            </div>
            {/* Phần danh sách sản phẩm */}
            {renderFoodProducts(foodProducts)}
          </div>
        </div>
      </section>

      {/* feedback */}
      <section className="feedback" id="feedback">
        <div className="container">
          <div className="row">
            <div className="section__title">
              <h2 data-title="Ý kiến">Phản hồi</h2>
            </div>
            <div className="row">
              <div className="feedback__items">
                <div className="feedback__item">
                  <div className="feedback__item__content">
                    <div className="feedback__item__content__text">
                      <h2>Nguyen Minh Tu</h2>
                      <span>Food Specialist</span>
                    </div>
                    <div className="feedback__item__content__img">
                      <img src={foodSpe1Img} alt=""></img>
                    </div>
                  </div>
                  <p>
                    Mr. Tu là một chuyên gia ẩm thực với hơn 10 năm kinh nghiệm.
                    Sự sáng tạo và tâm huyết của ông đã tạo ra những món ăn độc
                    đáo và ngon miệng, khiến nhà hàng của mình trở thành điểm
                    đến ưa thích của nhiều thực khách. Ông không chỉ là một đầu
                    bếp tài ba, mà còn là một người truyền cảm hứng và động viên
                    đồng nghiệp.
                  </p>
                  <div className="feedback__item__star">
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                  </div>
                </div>
                <div className="feedback__item">
                  <div className="feedback__item__content">
                    <div className="feedback__item__content__text">
                      <h2>Uzumaki Naruto</h2>
                      <span>Food Specialist</span>
                    </div>
                    <div className="feedback__item__content__img">
                      <img src={foodSpe2Img} alt=""></img>
                    </div>
                  </div>
                  <p>
                    Uzumaki Naruto, người từng là một ninja vĩ đại, giờ đã trở
                    thành một chuyên gia ẩm thực hàng đầu. Sau khi đạt được ước
                    mơ của mình là trở thành Hokage, vị lãnh tụ mạnh mẽ nhất
                    trong làng, Naruto quyết định khám phá và phát triển sở
                    thích mới của mình - nấu ăn.
                  </p>
                  <div className="feedback__item__star">
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                  </div>
                </div>
                <div className="feedback__item">
                  <div className="feedback__item__content">
                    <div className="feedback__item__content__text">
                      <h2>Monkey D. Luffy</h2>
                      <span>Food Specialist</span>
                    </div>
                    <div className="feedback__item__content__img">
                      <img src={foodSpe3Img} alt=""></img>
                    </div>
                  </div>
                  <p>
                    Monkey D. Luffy, một thuyền trưởng hải tặc nổi tiếng, giờ đã
                    trở thành một chuyên gia ẩm thực tài ba. Với tinh thần phiêu
                    lưu và lòng đam mê sâu sắc, Luffy đã dành nhiều năm khám phá
                    những hương vị độc đáo của thế giới và học hỏi từ những đầu
                    bếp tài ba mọi miền đất nước.
                  </p>
                  <div className="feedback__item__star">
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <GoStarFill />
                    </Link>
                    <Link>
                      <FaRegStarHalfStroke />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="team" id="team">
        <div className="container">
          <div className="row">
            <div className="section__title">
              <h2 data-title="Cộng sự">Thành viên</h2>
            </div>
          </div>
          <div className="row">
            <div className="team__items">
              <img src={foodSpe1Img} alt=""></img>
              <div className="team__items__text">
                <h2>Nguyen Minh Tu</h2>
                <span>Bếp trưởng</span>
              </div>
            </div>
            <div className="team__items">
              <img src={Staff1Img} alt=""></img>
              <div className="team__items__text">
                <h2>Vinsmoke Sanji</h2>
                <span>Cu li</span>
              </div>
            </div>
            <div className="team__items">
              <img src={Staff2Img} alt=""></img>
              <div className="team__items__text">
                <h2>Soma Yukihira</h2>
                <span>Phụ bếp</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(HomePage);
