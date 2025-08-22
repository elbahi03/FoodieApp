import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu, clearMenu } from "../store/menuSlice";
import { addToCart } from "../store/cartSlice"; // Importer l'action addToCart
import { useLocation, useNavigate } from "react-router-dom";

function MenuList() {
  const location = useLocation();
  const navigate = useNavigate();
  const restaurantId = location.state?.restaurant?.id;
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    if (restaurantId) {
      dispatch(fetchMenu(restaurantId));
    }

    return () => dispatch(clearMenu());
  }, [dispatch, restaurantId]);

  const handleAddToCart = (item) => {
    console.log("Ajout au panier :", item); // Vérifiez que l'article est affiché dans la console
    dispatch(addToCart(item)); // Ajouter l'article au panier
  };

  if (loading) return <p>Chargement du menu...</p>;
  if (error) return <p>Erreur: {error}</p>;
  if (list.length === 0) return <p>Aucun plat trouvé.</p>;

  return (
    <div>
      <h3>Menu du restaurant</h3>
      {list.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width={50} height={50} />
          <div>{item.name} - {item.prix} MAD </div>
          <button onClick={() => handleAddToCart(item)}>
            <img src="/img/carte.png" alt="" height={50} width={50} />
          </button>
        </div>
      ))}
      <div>
      <button onClick={() => navigate("/panier")}>Voir le panier</button>
    </div>
    </div>
  );
}

export default MenuList;
