import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default function Main() {
  const [coins, updateCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await (await fetch(
        "https://api.coinranking.com/v1/public/coins"
      )).json();

      const { coins } = res.data;
      updateCoins(coins);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>I'm in Main</h1>
      <ul>
        {coins.map(({ name, id, symbol, price }) => (
          <li key={symbol}>
            <Link to={`/coins/${id}`}>{`${id} ${name} ${price}`}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
