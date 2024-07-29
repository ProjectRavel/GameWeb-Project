import React from "react";
import "./gamecard.css";
import GameRating from "./GameRating";

export default function GameCard({ game }) {
  const currentPrice = (1 - game.discount) * game.price
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
      <div className="gameCard">
      <img src={game.img} alt={game.title} className="img-fluid" />
      <a href="#" className="like">
        <i className="bi bi-heart-fill"></i>
      </a>
      <div className="gameFeature">
        <span className="gameType">{game.level}</span>
        <GameRating rating={game.rating}></GameRating>
      </div>
      <div className="gameTitle mt-4 mb-3">{game.title}</div>
      <div className="gamePrice">
        {
          game.discount !=0 && (
            <>
              <span className="discount"><i>{game.discount * 100}%</i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )
        }
        <span className="currentPrice">
          ${currentPrice.toFixed(2)}
        </span>
      </div>
      <a href="#" className="addBag"><i className="bi bi-bag-plus-fill"></i></a>
      </div>
    </div>
  );
}
