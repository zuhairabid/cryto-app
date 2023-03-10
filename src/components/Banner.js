import React from "react";
import Carousel from "./Carousel";

function Banner() {
  return (
    <div className="banner text-center text-white ">
      <p className="text-[40px] pt-[50px] font-bold">CryptoHunt</p>
      <p className="text-sm">
        GET ALL THE INFO REGARDING YOUR FAVORITE CRYPTO CURRENCY
      </p>
      <p className="text-3xl font-bold mt-12">Trending Coins On CryptoHunt</p>
      <Carousel />
    </div>
  );
}

export default Banner;
