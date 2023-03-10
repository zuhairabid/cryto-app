import axios from "axios";
import React, { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState();
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "crypto news",
      count: "20",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "c85c54d697msh2d6bc0082e34a71p1fdea7jsn4c08dd282158",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((data) => {
        setNews(data.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (news)
    return (
      <div className="grid grid-flow-row-dense grid-col-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {news.map((item) => {
          return (
            <div className="w-[200px] h-20 bg-gray-500 border-2 border-black overflow-hidden">
              {item.name}
            </div>
          );
        })}
      </div>
    );
}

export default News;
