import { React, useEffect, useState } from "react";
import "./categories.css";
import { filterListData } from "../data/filterListData";
import GameCard from "../components/GameCard";

function Categories({ games, reference }) {
  const [filters, setFilters] = useState(filterListData);
  const [data, setData] = useState(games);
  const [text, setText] = useState("");

  useEffect(() => {
    setData(games);
  }, [games]);

  const handleFilterGames = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );
    if (category === "All") {
      return setData(games);
    } else {
      setData(games.filter((game) => game.category === category));
    }
  };

  const handleSearchGames = (e) => {
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setText(e.target.value);
  };

  return (
    <section className="categories" id="categories" ref={reference}>
      <div className="container">
        <div className="filters-and-search">
          <ul className="filters">
            {filters.map((filter) => (
              <li
                key={filter._id}
                className={filter.active ? "active" : ""}
                onClick={() => handleFilterGames(filter.name)}
              >
                {filter.name}
              </li>
            ))}
          </ul>
          <div className="search">
            <i className="bi bi-search"></i>
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={text}
              onChange={handleSearchGames}
            />
          </div>
        </div>
        <div className="row">
          {data.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
