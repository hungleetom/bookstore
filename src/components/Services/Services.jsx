import React from "react";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "건우의 99번째 소개팅",
    description:
      "'건우의 99번째 소개팅'은 사랑을 지키려 애쓰는 건우가 99번째 소개팅에서 마주치는 슬픈 이야기를 그린 소설입니다. 이 책은 건우의 사랑을 찾는 노력과 그의 감정적인 여정을 다루며 독자들에게 감동과 위로를 전합니다.",
  },
  {
    id: 2,
    img: Img2,
    title: "정선호의 슬픈 이야기",
    description:
      "'정선호의 슬픈 이야기'는 삶의 고난과 역경을 감동적으로 그려낸 소설로, 주인공 정선호의 슬픔과 희망을 담고 있습니다. 이 책은 인간의 깊은 감정을 섬세하게 표현하여 독자에게 깊은 울림을 줍니다.",
  },
  {
    id: 3,
    img: Img3,
    title: "전봇대와 곰보빵의 만남",
    description:
      "'전봇대와 곰보빵의 만남'은 두 남성 주인공 간에 형성되는 감동적인 우정을 중심으로 한 이야기입니다. 이 책은 사랑과 우정의 가치에 대해 다루기도 하지만, 주된 내용은 그들의 우정과 성장에 초점을 맞추고 있습니다.",
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              유행하는 책들
            </p>
            <h1 className="text-3xl font-bold">인기 책들</h1>
            <p className="text-xs text-gray-400">
            왕이 왕자에게 "내가 오늘 밤에 당신에게 뭐라고 해야 할지 잊어버렸어."라고 하니, 왕자가 대답했다. "그럼, 내일 다시 기억해보세요!",
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    지금 당장 주문!!!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
