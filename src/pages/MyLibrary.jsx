import React from "react";
import "./mylibrary.css";
import GameCard from "../components/GameCard";

function MyLibrary({ games, reference }) {
  console.log(games);
  return (
    <section id="library" className="library" ref={reference}>
      <h1>My Library</h1>
      <div className="row">
        {games.length === 0 ? (
          <h2>Your Library is empty</h2>
        ) : (
          games.map((game) => <GameCard key={game._id} game={game} />)
        )}
      </div>
    </section>
  );
}

export default MyLibrary;
