import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // Lire les articles du panier

  return (
    <div>
      <h3>Panier</h3>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} width={50} height={50} />
              {item.name} - {item.prix} MAD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;