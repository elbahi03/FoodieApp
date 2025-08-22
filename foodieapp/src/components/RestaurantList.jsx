import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../store/restaurantSlice";
import { useNavigate } from "react-router-dom";
import "../style/RestaurantList.css";

function RestaurantList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.restaurants);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  const handleVoirDetails = (restaurant, id) => {
    navigate(`/restaurant/${id}/menu`, { state: { restaurant } });
  };

  return (
    <div className="restaurant-list">
      <h2>Liste des Restaurants</h2>
      <ul>
        {list.map((resto) => (
          <li key={resto.id} className="restaurant-card">
            <img src={resto.logo} alt={resto.name} />
            <h3>{resto.name}</h3>
            <p>{resto.city} : ⭐ {resto.rating}</p>
            <button onClick={() => handleVoirDetails(resto, resto.id)}>
              Voir les détails
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
