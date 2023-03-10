import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";

function Carousel() {
  const [trendCoins, setTrendCoins] = useState([]);
  const fetchTrendingCoins = () => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((data) => {
        setTrendCoins(data.data.coins);
      });
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const items = trendCoins.map((item) => {
    return (
      <div className="flex items-center flex-col my-5">
        <img src={item.item.small} className="w-20 h-20" />
        <div>
          <p>{item.item.symbol}</p>
          <p>{item.item.price_btc} btc</p>
        </div>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="mt-5 pb-12">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
}

export default Carousel;

/* <div className="flex justify-around mt-5">
        {trendCoins ? (
          trendCoins.map((items) => {
            return (
              <div className="flex items-center flex-col">
                <img src={items.item.small} />
                <p>{items.item.name}</p>
              </div>
            );
          })
        ) : (
          <p>No trend Coins</p>
        )}
      </div> */
