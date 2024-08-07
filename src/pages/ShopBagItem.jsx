import React from "react";
import './ShopBagItem.css'

function ShopBagItem({ game, index }) {
  console.log("this is a game and index" + game + index)
  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td>
        <img src={game.img} alt="" className="img-fluid" />
      </td>
      <td>{game.title}</td>
      <td>${game.price}</td>
      <td>{(game.discount * 100).toFixed(2)}%</td>
      <td>{(game.price * (1 - game.discount)).toFixed(2)}</td>
      <a href="#"><i className="bi bi-trash"></i></a>
    </tr>
  );
}

export default ShopBagItem;
