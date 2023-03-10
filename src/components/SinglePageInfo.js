import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function SinglePageInfo(props) {
  const [coin, setCoin] = useState();
  const fetchCoins = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + props.id)
      .then((data) => {
        setCoin(data.data);
        // setSearchResults(data.data);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);
  if (!coin) return <Loader />;
  else if (coin)
    return (
      <div className="w-full text-white  mx-auto flex flex-col items-center">
        <img className="w-20 h-20" src={coin.image.small} alt="" />
        <h1 className="text-2xl font-bold">{coin.name}</h1>
        <p className="font-bold">
          Rank:<span className="font-medium ml-1"> {coin.market_cap_rank}</span>
        </p>
        <p className="font-bold">
          Current Price:
          <span className="font-medium ml-2">
            ${coin.market_data.current_price.usd}
          </span>
        </p>
        <p className="font-bold">
          Market Cap:
          <span className="ml-2 font-medium">
            $
            {Math.floor(
              coin.market_data.market_cap.usd / 1000000
            ).toLocaleString()}
            M
          </span>
        </p>
      </div>
    );
}

export default SinglePageInfo;

// https://api.coingecko.com/api/v3/coins/${id}
