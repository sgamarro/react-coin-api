import React from "react";
import CryptoFilter from "../CryptoFilter/CryptoFilter";
import Card from "../UI/Card";
import CryptoList from "./CryptoList";

const CryptoContainer = () => {
  return (
    <Card>
      <CryptoFilter />
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
        <CryptoList />
      </table>
    </Card>
  );
};

export default CryptoContainer;
