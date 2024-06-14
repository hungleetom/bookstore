import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "아가씨",
    rating: 5.0,
    author: "이한준",
  },
  {
    id: 2,
    img: Book2,
    title: "등산의 목적",
    rating: 4.5,
    author: "정선호",
  },
  {
    id: 3,
    img: Book3,
    title: "끄응!!",
    rating: 4.7,
    author: "강동석",
  },
  {
    id: 4,
    img: Book2,
    title: "나는 차였다",
    rating: 4.4,
    author: "이건우",
  },
  {
    id: 5,
    img: Book1,
    title: "교수님2요",
    rating: 4.5,
    author: "오찬영",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              당신을 위한 책들
            </p>
            <h1 className="text-3xl font-bold">인기 책들</h1>
            <p className="text-xs text-gray-400">
              이런 책들을 읽어줘야하지 않겠습니까??? 여기 있는 책들 읽으면 저희 과대가 예쁘다고 뽀뽀해준다고 합니다!
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                모든 책 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
