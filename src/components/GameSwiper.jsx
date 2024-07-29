import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./gameswiper.css";
// Import required modules
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import GameSlide from "./GameSlide";

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);

  const handleToggleVideo = () => {
    setActive(!active);
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {games.map((game) => (
        <SwiperSlide key={game._id} >
          <GameSlide
            // Ensure each slide has a unique key
            game={game}
            handleToggleVideo={handleToggleVideo}
            active={active}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GameSwiper;
