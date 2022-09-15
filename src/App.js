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

    setCrypto(apiData);
  };

  useEffect(() => {
    ApiHandeler();
  }, []);

  return (
    <Fragment>
      <CryptoContainer />
    </Fragment>
  );
}

export default App;
