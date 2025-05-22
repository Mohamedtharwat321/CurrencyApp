import React, { useContext, useEffect, useState } from "react";
import "./Coins.css";
import arrow from "../../assets/arrow_icon.png";
import { Link } from "react-router-dom";
import { CoinContext } from "../../Context/CoinContext";

const Coins = () => {
  const { allCurrency, currency,displayCoins,setDisplayCoins} = useContext(CoinContext);
  useEffect(() => {
    setDisplayCoins(allCurrency);
  }, [allCurrency]);

  return (
    <section className="coins">
      <div className="coins-table">
          <div className="table-layout">
            <h3>#</h3>
            <h3 className="coin-th">Coins</h3>
            <h3>Price</h3>
            <h3>24H Change</h3>
            <h3 className="market-cap">Market Cap</h3>
          </div>
        {displayCoins.slice(0, 10).map((item, idx) => (
            <Link to={`/currency/${item.id}`} className="table-layout" key={idx}>
              <p>{item.market_cap_rank}</p>
              <div className="coin-name-img">
                <img src={item.image} alt="coin icon" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>
                {currency.symbol}
                {item.current_price.toLocaleString()}
              </p>
              <p
                className={
                  item.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                {item.price_change_percentage_24h.toFixed(2)}
              </p>
              <p className="market-cap">
                {currency.symbol} {item.market_cap.toLocaleString()}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Coins;
