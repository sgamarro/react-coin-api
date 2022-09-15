import React from "react";

const CryptoList = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.rank}</td>

        <td>
          <img style={{ width: "20px" }} src={props.url} />
          {props.name}
        </td>
        <td>{props.price}</td>
        <td>{props.market}</td>
        <td>{props.volume}</td>
        <td>{props.change}</td>
      </tr>
    </tbody>
  );
};

export default CryptoList;
