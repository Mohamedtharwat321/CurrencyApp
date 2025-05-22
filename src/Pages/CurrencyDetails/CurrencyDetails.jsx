import React, { useContext, useEffect, useState } from "react";
import "./CurrencyDetails.css";
import arrow from "../../assets/arrow_icon.png";
import test from "../../assets/line-chart-example.svg";
import { useParams } from "react-router-dom";
import Linechart from "../../Components/Linechart/Linechart";
import { CoinContext } from "../../Context/Coincontext";

const CurrencyDetails = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  const [coinInfo, setCoinInfo] = useState();
  const [chartData, setChartData] = useState();

  const fetchCoinsData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-eCNfwytvpz7PSNSQvF1YNX78	",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinInfo(res))
      .catch((err) => console.error(err));
  };
  const fetchChartData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-eCNfwytvpz7PSNSQvF1YNX78	",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setChartData(res))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchCoinsData();
    fetchChartData();
  }, [currency]);
  if (coinInfo && chartData) {
    return (
      <section className="currency-details">
       <div className="head">
         <img
           className="chartimg"
           src={coinInfo.image.large}
           alt="chart image"
         />
         <p className="coin-name">
           <b>
             {coinInfo.name} ({coinInfo.symbol.toUpperCase()})
           </b>
         </p>
       </div>
        <div className="coin-chart">
          <Linechart chartData={chartData} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinInfo.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {currency.symbol}{" "}
              {coinInfo.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
              {currency.symbol}{" "}
              {coinInfo.market_data.market_cap[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour High</li>
            <li>
              {currency.symbol}{" "}
              {coinInfo.market_data.high_24h[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour Low</li>
            <li>
              {currency.symbol}{" "}
              {coinInfo.market_data.low_24h[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
        </div>
      </section>
    );
  } else {
    return (
      <section className="spinner">
        <div className="spin"></div>
      </section>
    );
  }
};

export default CurrencyDetails;
