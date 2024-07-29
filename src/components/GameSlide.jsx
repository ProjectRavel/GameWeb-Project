import React from 'react';
import { SwiperSlide } from 'swiper/react';

function GameSlide({ game, active, handleToggleVideo }) {
    const string = game.description.split(".")
  return (
      <div className="gameSlider">
        <img src={game.img} alt="Game Image" />
        <div className={`video ${active ? 'active' : ""}`}>
          <iframe
            width="1280"
            height="720"
            src={game.trailer}
            title={game.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="content">
          <h2>
            {game.title.length > 18
              ? `${game.title.slice(0, 19)}...`
              : game.title}
          </h2>
          <p>{`${string[0]}${string[1]}`}</p>
          <div className="buttons">
            <a href="#" className="orderBtn">
              Order Now
            </a>
            <a
              href="#"
              className={`playBtn ${active ? "active" : ""}`}
              onClick={handleToggleVideo}
            >
              <span className="pause">
                <i className="bi bi-pause-fill"></i>
              </span>
              <span className="play">
                <i className="bi bi-play-fill"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
  );
}

export default GameSlide;
