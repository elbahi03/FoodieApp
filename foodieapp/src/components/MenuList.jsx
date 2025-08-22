import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu, clearMenu } from "../store/menuSlice";
import { addToCart } from "../store/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/MenuList.css"; 

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
    console.log("Ajout au panier :", item);
    dispatch(addToCart(item));
  };

  if (loading) return <p>Chargement du menu...</p>;
  if (error) return <p>Erreur: {error}</p>;
  if (list.length === 0) return <p>Aucun plat trouvé.</p>;

  return (
    <div className="menu-list">
      <h3>Menu du restaurant</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {list.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <div>{item.name} - {item.prix} MAD</div>
            <button onClick={() => handleAddToCart(item)}>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
