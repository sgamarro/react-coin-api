import React from "react";
import clases from "./CryptoList.module.css";

const CryptoList = (props) => {
  return (
    <tbody className={clases["content-container"]}>
      <tr>
        <td className={clases.rank}>{props.rank}</td>
        <td className={clases.coin}>
          <img src={props.url} alt="logo" />
          <p>{props.name}</p>
        </td>
        <td>${props.price}</td>
        <td>${props.market}</td>
        <td>{props.volume}</td>
        <td className={props.change < 0.01 ? clases.red : clases.green}>
          {props.change}%
        </td>
      </tr>
    </tbody>
  );
};

export default CryptoList;
