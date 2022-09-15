import React, { useState } from "react";
import CryptoFilter from "../CryptoFilter/CryptoFilter";
import Card from "../UI/Card";
import CryptoList from "./CryptoList";

const CryptoContainer = (props) => {
  const [filterInput, setFilterInput] = useState();
  const fitelerHandeler = (input) => {
    setFilterInput(input);
  };

  const filteredCrypto = props.apiInfo.filter((search) => {
    if (filterInput === "") {
      return search;
    } else {
      return search.name.toLowerCase().includes(filterInput);
    }
  });

  return (
    <Card>
      <CryptoFilter filter={fitelerHandeler} />
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Price</th>
            <th>MarketCap</th>
            <th>Volume(24h)</th>
            <th>Change</th>
          </tr>
        </thead>

        {filteredCrypto.map((coin) => {
          return (
            <CryptoList
              key={coin.uuid}
              url={coin.iconUrl}
              name={coin.name}
              rank={coin.rank}
              price={coin.price}
              market={coin.marketCap}
              volume={coin["24hVolume"]}
              change={coin.change}
            />
          );
        })}
      </table>
    </Card>
  );
};

export default CryptoContainer;
