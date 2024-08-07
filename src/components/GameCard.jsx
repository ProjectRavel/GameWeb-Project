import React, { useContext, useEffect } from "react";
import "./gamecard.css";
import GameRating from "./GameRating";
import { AppContext } from "../App";

export default function GameCard({ game }) {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);
  const handleAddToLibrary = (game) => {
    setLibrary([...library, game]);

  };

  const handleAddToBag = (game) => {
    if (bag.includes(game)) return;
    setBag([...bag, game]);
  }

  const handleRemoveFromLibrary = (game) => {
    setLibrary(library.filter((item) => item._id !== game._id));
  };

  const currentPrice = (1 - game.discount) * game.price;
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mt-4">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a
          href="#"
          className={`like ${library.includes(game) ? "active" : ""}`}
          onClick={
            library.includes(game)
              ? () => handleRemoveFromLibrary(game)
              : () => handleAddToLibrary(game)
          }
        >
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
        </div>
        <div className="gameTitle mt-4 mb-3">{game.title}</div>
        <div className="gamePrice">
          {game.discount != 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">${currentPrice.toFixed(2)}</span>
        </div>
        <a href="#" className="addBag active">
          <i className="bi bi-bag-plus-fill" onClick={() => handleAddToBag(game)}></i>
        </a>
      </div>
    </div>
  );
}
