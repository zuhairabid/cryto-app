import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";

function CoinList() {
  const navigate = useNavigate();
  const [Coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const fetchCoins = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((data) => {
        setCoins(data.data);
        // setSearchResults(data.data);
      });
  };

  const handleSearch = () => {
    const filtered_result = Coins.filter((item) => {
      return (
        item.symbol.toLowerCase().includes(search) ||
        item.name.toLowerCase().includes(search)
      );
    });
    return filtered_result;
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  if (!Coins.length > 0) return <Loader />;
  return (
    <div>
      <div className="w-[90%] mx-auto mt-5">
        <input
          type="text"
          className="w-full"
          onInput={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="w-[90%] mx-auto mt-5">
        <thead className="bg-yellow-500 ">
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24hrs Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch()
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((item) => {
              return (
                <tr
                  // key={Math.floor(Math.random() * 100)}
                  onClick={() => navigate("/coin/" + item.id)}
                  className="hover:cursor-pointer hover:bg-neutral-700 text-white text-sm border-b border-neutral-400"
                >
                  <td className="flex py-3">
                    <img src={item.image} alt="" className="w-10 h-10 mr-5" />
                    <div>
                      <p>{item.name}</p>
                      <p>{item.symbol} </p>
                    </div>
                  </td>
                  <td>{item.current_price}</td>
                  <td>{item.price_change_percentage_24h}</td>
                  <td>{item.market_cap}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        onPageChange={(x) => setPage(x.selected + 1)}
        pageCount={Coins.length / 10}
        className="text-yellow-500 font-bold text-sm flex items-center space-x-5 my-10 mx-auto w-min"
        pageClassName="hover:rounded-[50%] hover:bg-neutral-500 w-10 h-10 flex justify-center items-center"
        nextLinkClassName="hover:rounded-[50%] hover:bg-neutral-500 w-10 h-10 flex justify-center items-center"
        previousLinkClassName="hover:rounded-[50%] hover:bg-neutral-500 w-10 h-10 flex justify-center items-center"
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default CoinList;

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false
