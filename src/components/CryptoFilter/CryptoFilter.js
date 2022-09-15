import React, { useRef } from "react";

const CryptoFilter = (props) => {
  const filterValue = useRef();

  const filterInput = () => {
    props.filter(filterValue.current.value);
  };

  return (
    <input
      type={"text"}
      placeholder="Search Coin"
      ref={filterValue}
      onChange={filterInput}
    />
  );
};

export default CryptoFilter;
