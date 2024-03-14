import { memo } from "react";

import "./homePage.scss";

// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";

// import feature1Img from "assets/users/images/feature/feature1Img.jpg";
// import feature2Img from "assets/users/images/feature/feature2Img.jpg";
// import feature3Img from "assets/users/images/feature/feature3Img.jpg";
// import feature4Img from "assets/users/images/feature/feature4Img.jpg";
// import feature5Img from "assets/users/images/feature/feature5Img.jpg";
// import feature6Img from "assets/users/images/feature/feature6Img.jpg";
// import feature7Img from "assets/users/images/feature/feature7Img.jpg";
// import feature8Img from "assets/users/images/feature/feature8Img.jpg";

// import { Link } from "react-router-dom";
// import { formatter } from "utils/formatter";
import aboutBg from "assets/users/images/background/about-bg.jpg";

const HomePage = () => {
  // const featProducts = {
  //   all: {
  //     title: "Toàn bộ",
  //     products: [
  //       {
  //         img: feature1Img,
  //         name: "Thịt bò nạt",
  //         price: 100000,
  //       },
  //       {
  //         img: feature2Img,
  //         name: "Chuối",
  //         price: 10000,
  //       },
  //       {
  //         img: feature3Img,
  //         name: "Ổi hồng",
  //         price: 20000,
  //       },
  //       {
  //         img: feature4Img,
  //         name: "Dưa hấu",
  //         price: 30000,
  //       },
  //       {
  //         img: feature5Img,
  //         name: "Bò mỹ",
  //         price: 170000,
  //       },
  //       {
  //         img: feature6Img,
  //         name: "Pizza phô mai",
  //         price: 89000,
  //       },
  //       {
  //         img: feature7Img,
  //         name: "Hamberger bò",
  //         price: 69000,
  //       },
  //       {
  //         img: feature8Img,
  //         name: "Sầu riêng",
  //         price: 150000,
  //       },
  //     ],
  //   },
  //   freshMeat: {
  //     title: "Thịt tươi",
  //     products: [
  //       {
  //         img: feature1Img,
  //         name: "Thịt bò nạt",
  //         price: 100000,
  //       },
  //       {
  //         img: feature5Img,
  //         name: "Bò mỹ",
  //         price: 170000,
  //       },
  //     ],
  //   },
  //   fruits: {
  //     title: "Trái cây",
  //     products: [
  //       {
  //         img: feature2Img,
  //         name: "Chuối",
  //         price: 10000,
  //       },
  //       {
  //         img: feature3Img,
  //         name: "Ổi hồng",
  //         price: 20000,
  //       },
  //       {
  //         img: feature4Img,
  //         name: "Dưa hấu",
  //         price: 30000,
  //       },
  //       {
  //         img: feature8Img,
  //         name: "Sầu riêng",
  //         price: 150000,
  //       },
  //     ],
  //   },
  //   fastFood: {
  //     title: "Thức ăn nhanh",
  //     products: [
  //       {
  //         img: feature6Img,
  //         name: "Pizza phô mai",
  //         price: 89000,
  //       },
  //       {
  //         img: feature7Img,
  //         name: "Hamberger bò",
  //         price: 69000,
  //       },
  //     ],
  //   },
  // };

  // const renderFeaturedProducts = (data) => {
  //   const tabList = [];
  //   const tabPanels = [];

  //   Object.keys(data).forEach((key, index) => {
  //     tabList.push(<Tab key={index}>{data[key].title}</Tab>);

  //     const tabPanel = [];
  //     data[key].products.forEach((item, j) => {
  //       tabPanel.push(
  //         <div className="col-lg-3" key={j}>
  //           <div className="featured__item">
  //             <div
  //               className="featured__item__pic"
  //               style={{
  //                 backgroundImage: `url(${item.img})`,
  //               }}
  //             >
  //               <ul className="featured__item__pic__hover">
  //                 <li>
  //                   <AiOutlineEye />
  //                 </li>
  //                 <li>
  //                   <AiOutlineShoppingCart />
  //                 </li>
  //               </ul>
  //             </div>
  //             <div className="featured__item__text">
  //               <h6>
  //                 <Link to={""}>{item.name}</Link>
  //               </h6>
  //               <h5>{formatter(item.price)}</h5>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     });
  //     tabPanels.push(tabPanel);
  //   });

  //   return (
  //     <Tabs>
  //       <TabList>{tabList}</TabList>
  //       {/* render bi loi thi doi {} thanh () */}
  //       {tabPanels.map((item, key) => (
  //         <TabPanel key={key}>
  //           <div className="row">{item}</div>
  //         </TabPanel>
  //       ))}
  //     </Tabs>
  //   );
  // };

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
          <div className="row">
            <div className="menu__title">
              <button className="menu__btn">Tất cả</button>
              <button className="menu__btn">Trưa</button>
              <button className="menu__btn">Chiều tối</button>
              <button className="menu__btn">Đồ uống</button>
              <button className="menu__btn">Điểm tâm</button>
            </div>
          </div>
          {/* {renderFeaturedProducts(featProducts)} */}
        </div>
      </section>
    </>
  );
};

export default memo(HomePage);
