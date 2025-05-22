import React, { useContext, useState } from "react";
import "./Hero.css";
import { CoinContext } from "../../Context/CoinContext";

const Hero = () => {
  const { input, setInput, allCurrency, setDisplayCoins } =
    useContext(CoinContext);
  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoins(allCurrency);
    }
  };
  const searchHandler = async (event) => {
    event.preventDefault();
    const filteredCoins = await allCurrency.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoins(filteredCoins);
  };
  return (
    <div className="hero">
      <h1>
        Largest <br /> Crypto Marketplace
      </h1>
      <p>
        Welcome to the world's largest cryptocurrency marketplace. Sign up to
        explore more about cryptos.
      </p>
      <form onSubmit={searchHandler}>
        <input
          list="coinlist"
          type="text"
          placeholder="Search crypto.."
          onChange={inputHandler}
          required
        />
        <datalist id="coinlist">
          {allCurrency.map((item, idx) => (
            <option key={idx} value={item.name} />
          ))}
        </datalist>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Hero;
