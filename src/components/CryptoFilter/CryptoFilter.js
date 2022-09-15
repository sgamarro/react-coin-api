import React, { useRef } from "react";
import clases from "./CryptoFilter.module.css";

const CryptoFilter = (props) => {
  const filterValue = useRef();

  const filterInput = () => {
    props.filter(filterValue.current.value);
  };

  return (
    <input
      className={clases.filter}
      type={"text"}
      placeholder="Search Coin"
      ref={filterValue}
      onChange={filterInput}
    />
  );
};

export default CryptoFilter;
