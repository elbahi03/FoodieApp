import { Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantList from './components/RestaurantList';
import DetailsResto from './pages/detailsresto'; // Corrigez le nom ici
import Cart from './pages/panier';
import Home from './pages/home';
import Apropos from './pages/Apropos';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route  path="restaurant/:id/menu" element={<DetailsResto />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/panier" element={<Cart />} />

      </Routes>
    </>
  );
}

export default App;
