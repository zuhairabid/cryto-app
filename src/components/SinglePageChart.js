import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Loader from "./Loader";
import SelectButton from "./SelectButton";

function SinglePageChart(props) {
  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "3 Months",
      value: 90,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=${days}`
      )
      .then((data) => {
        setHistoricalData(data.data.prices);
      })
      .catch((err) => console.log(err));
  }, [days]);
  //  useeffect will always run at first when the page loads
  // in addition based on the states inside array , the function inside useeffect
  // will run

  return (
    <div className="w-full">
      {/* <div>
        <input
          type="number"
          name=""
          id=""
          min={1}
          max={365}
          onInput={(e) => setDays(e.target.value)}
        />
      </div> */}
      {!historicalData ? (
        <Loader />
      ) : (
        <Line
          data={{
            labels: historicalData.map((coin) => {
              let date = new Date(coin[0]);

              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;

              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicalData.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) `,
                borderColor: "#EEBC1D",
              },
            ],
          }}
        />
      )}

      <div>
        {chartDays.map((item) => {
          return (
            <SelectButton
              label={item.label}
              onClick={() => {
                setDays(item.value);
              }}
              selected={item.value === days}
            />
          );
        })}
      </div>
    </div>
  );
}
export default SinglePageChart;
