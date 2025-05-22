import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { Link } from "react-router-dom";
import { CoinContext } from "../../Context/Coincontext";

const Navbar = () => {
  let { setCurrency } = useContext(CoinContext);
  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      }
      default: {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
    }
  };
  return (
    <section className="navbar">
      <Link to='/'>
        <img className="logo" src={logo} alt="logo icon" />
      </Link>
      <div className="navbar-middle">
        <ul>
          <Link to='/'>Home</Link>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="navbar-right">
        <select onChange={currencyHandler} name="currency" id="cars">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <div>
          <button>Sign up</button>
          <img src={arrow} alt="arrow icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
