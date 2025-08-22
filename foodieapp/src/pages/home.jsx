import React from 'react'
import '../style/home.css';

export const home = () => {
  return (
    <div>
        <div className='home-hero'>
        <h1>Bienvenue sur Foodie</h1>
        <p>Votre application de livraison de repas préférée</p>
        <a href="/restaurants" className="btn">Voir les restaurants</a>
        </div>
        <div className='home-info'>
            <h1> pourquoi nous ?</h1>
            <p>Nous offrons une variété de cuisines, des offres exclusives et une livraison rapide.</p>
            <p>Nous nous engageons à fournir des repas de haute qualité et des services de livraison rapide.</p>
            <p>Nous sommes fiers de fournir une experience de livraison rapide et conviviale.</p>
        </div>
    </div>
  )
}

export default home