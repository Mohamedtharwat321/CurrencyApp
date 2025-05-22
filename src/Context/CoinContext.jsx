import { createContext, useEffect, useState } from "react";

export let coinContext = createContext(0);

export default function CoinContextProvider(props) {
  const [allCurrency, setAllCurrency] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });
  const [input, setInput] = useState("");
  const [displayCoins, setDisplayCoins] = useState([]);

  const fetchAllcoins = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-eCNfwytvpz7PSNSQvF1YNX78	",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setAllCurrency(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllcoins();
  }, [currency]);
  return (
    <coinContext.Provider
      value={{
        allCurrency,
        currency,
        setCurrency,
        input,
        setInput,
        displayCoins,
        setDisplayCoins,
      }}
    >
      {props.children}
    </coinContext.Provider>
  );
}
