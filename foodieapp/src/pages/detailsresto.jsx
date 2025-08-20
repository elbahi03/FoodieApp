import React from "react";
import MenuList from "../components/MenuList";
import { useLocation } from "react-router-dom";
import '../style/detailsresto.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const DetailsResto = () => {
  const location = useLocation();
  const restaurant = location.state?.restaurant;

  if (!restaurant) {
    return <p>Aucun détail disponible pour ce restaurant.</p>;
  }

  return (
    <div>
      <h2>Détails du Restaurant</h2>
      <div>
        <img src={restaurant.logo} alt={restaurant.name} />
        <h3>{restaurant.name}</h3>
        <h2>⭐ {restaurant.rating} - {restaurant.city}</h2>
        <p>{restaurant.description}</p>
      </div>
      {/* Afficher le menu */}
      <MenuList />
      <div>
        <h2>GALERIE</h2>
        <div>
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src={restaurant.pic[0]} /></SwiperSlide>
            <SwiperSlide><img src={restaurant.pic[1]} /></SwiperSlide>
            <SwiperSlide><img src={restaurant.pic[2]} /></SwiperSlide>
            <SwiperSlide><img src={restaurant.pic[3]} /></SwiperSlide>
            <SwiperSlide><img src={restaurant.pic[4]} /></SwiperSlide>
            <SwiperSlide><img src={restaurant.pic[5]} /></SwiperSlide>
            <SwiperSlide><img src={restaurant.pic[6]} /></SwiperSlide>
            <SwiperSlide><img src={restaurant.pic[7]} /></SwiperSlide>
            <SwiperSlide><img src={restaurant.pic[8]} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <h2>Contact</h2>
        <p><strong>Adresse:</strong> {restaurant.localisation}</p>
        <p><strong>Téléphone:</strong> +{restaurant.contact}</p>
        <p><strong>Email:</strong> {restaurant.name.replace(/\s/g, '')}@gmail.com</p>
        <p><strong>instagram:</strong>@{restaurant.name.replace(/\s/g, '')}</p>
      </div>
      <div>
        <h2>COMMENTAIRES</h2>
        {restaurant.review && restaurant.review.length > 0 ? (
          restaurant.review.map((review, index) => (
            <div key={index} className="review">
              <div><img src="/img/profil.png" alt={review.name}  width={50} height={50}/></div>
              <p><strong>{review.name}</strong></p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>Aucun commentaire disponible.</p>
        )}
      </div>
    </div>
  );
};

export default DetailsResto;
