import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../store/restaurantSlice";
import { useNavigate } from "react-router-dom";

function RestaurantList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.restaurants);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchRestaurants()); // 👉 on appelle l’API quand le composant se charge
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  const handleVoirDetails = (restaurant , id) => {
    navigate(`/restaurant/${id}/menu`, { state: { restaurant } });
  };

  return (
    <div>
      <h2>Liste des Restaurants</h2>
      <ul>
        {list.map((resto) => (
          <div>
              <img src={resto.logo} alt="" />
              {resto.name}
              <p>{resto.city} : ⭐ {resto.rating}</p>
          <button onClick={() => handleVoirDetails(resto, resto.id)}>Voir le details</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
