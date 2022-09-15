import React, { useRef } from "react";

const CryptoFilter = (props) => {
  const filter = useRef();

  const filterInput = () => {
    console.log(filter.current.value);
  };

  return (
    <input
      type={"text"}
      placeholder="Search Coin"
      ref={filter}
      onChange={filterInput}
    />
  );
};

export default CryptoFilter;
