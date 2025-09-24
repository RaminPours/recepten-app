import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetail from "./pages/RecipeDetail";
import FavoritesPage from "./pages/FavoritesPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryRecipesPage from "./pages/CategoryRecipesPage";
import recipes from "./data/recipes";
import "./styles/App.css"



export default function App() {

//favorieten ophalen
const [favoriteIds, setFavoriteIds] = useState(
  JSON.parse(localStorage.getItem("favoriteIds")) || []
);

//favorieten opslaan in geheugen
useEffect(() => {
localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
}, [favoriteIds]);


// recept toevoegen aan favorieten
const addFavoriteAndGo = (id, navigate) => {
setFavoriteIds((prev) => 
(prev.includes(id) ? prev : [...prev, id]));
navigate("/favorieten");
};

// verwijderen uit favorieten of toevoegen 
const toggleFavorite = (id) => {
setFavoriteIds((prev) =>
prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
);
};


return (
<div className="container">
<Navbar />

<Routes>
<Route 
// Startpagina met alle recepten
path="/" element={<RecipesPage recipes={recipes} />} />

<Route
// details over een recept
path="/recept/:id"
element={
<RecipeDetail
recipes={recipes}
favoriteIds={favoriteIds}
toggleFavorite={toggleFavorite}
addFavoriteAndGo={addFavoriteAndGo}
/>
}
/>

<Route
// favorieten pagina
path="/favorieten"
element={<FavoritesPage recipes={recipes} favoriteIds={favoriteIds} />}
/>


<Route 
// Aantal landen
path="/categories" element={<CategoriesPage />} />
<Route 
// Land met recepten
path="/categorie/:l" element={<CategoryRecipesPage recipes={recipes} />} />

</Routes>
</div>
);
}