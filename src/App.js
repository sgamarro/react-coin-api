import React, { Fragment, useEffect, useState } from "react";
import { fetchData, CryptoOptions } from "./api/cryptoapi";
import "./App.css";
import CryptoContainer from "./components/CryptoContainer/CryptoContainer";

function App() {
  const [crypto, setCrypto] = useState([]);

  const ApiHandeler = async () => {
    const apiData = await fetchData(
      "https://coinranking1.p.rapidapi.com/coins",
      CryptoOptions
    );

    setCrypto(apiData.data.coins);
  };

  useEffect(() => {
    ApiHandeler();
  }, []);

  return (
    <Fragment>
      <section className="crypto-container">
        <CryptoContainer apiInfo={crypto} />
      </section>
    </Fragment>
  );
}

export default App;
