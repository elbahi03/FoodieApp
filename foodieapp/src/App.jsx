import { Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantList from './components/RestaurantList';
import DetailsResto from './pages/detailsresto'; // Corrigez le nom ici

function App() {
  return (
    <>
      <Routes>
        {/* Page d'accueil avec la liste des restaurants */}
        <Route path="/" element={<RestaurantList />} />

        {/* Page menu d'un restaurant par id */}
        <Route
          path="restaurant/:id/menu"
          element={<DetailsResto />} // Corrigez le nom ici
        />
      </Routes>
    </>
  );
}

export default App;
