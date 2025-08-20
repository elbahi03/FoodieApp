import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu, clearMenu } from "../store/menuSlice";
import { useLocation } from "react-router-dom";

function MenuList() {
  const location = useLocation();
  const restaurantId = location.state?.restaurant?.id;
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    if (restaurantId) {
      dispatch(fetchMenu(restaurantId));
    }

    return () => dispatch(clearMenu());
  }, [dispatch, restaurantId]);

  if (loading) return <p>Chargement du menu...</p>;
  if (error) return <p>Erreur: {error}</p>;
  if (list.length === 0) return <p>Aucun plat trouvé.</p>;

  return (
    <div>
      <h3>Menu du restaurant</h3>
        {list.map((item) => (
          <div key={item.id}>
            <button><img src="/img/etoile.png" alt="" height={50} width={50} /></button>
            <img src={item.image} alt={item.name} width={50} height={50} />
            <div>{item.name} - {item.prix} MAD </div>
            <button><img src="/img/carte.png" alt="" height={50} width={50}/></button>
          </div>
        ))}
    </div>
  );
}

export default MenuList;
