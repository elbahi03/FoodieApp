
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RestaurantList from './components/RestaurantList'
import MenuList from './components/MenuList'

function App() {
  return (
    <>
      <Routes>
        {/* Page d'accueil avec la liste des restaurants */}
        <Route path="/" element={<RestaurantList />} />

        {/* Page menu d'un restaurant par id */}
        <Route
          path="restaurant/:id/menu"
          element={<MenuList />}
        />
      </Routes>

    </>
  )
}

export default App
