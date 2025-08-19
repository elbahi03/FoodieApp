import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../store/restaurantSlice";

function RestaurantList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants()); // 👉 on appelle l’API quand le composant se charge
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div>
      <h2>Liste des Restaurants</h2>
      <ul>
        {list.map((resto) => (
          <li key={resto.id}>{resto.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
