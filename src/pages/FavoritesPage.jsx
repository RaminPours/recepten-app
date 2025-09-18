import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";


export default function FavoritesPage({ recipes, favoriteIds }) {
const navigate = useNavigate();
const favoriteRecipes = recipes.filter((r) => favoriteIds.includes(r.id));


return (
<div>
<h2 style={{display: "flex", fontSize: "40px", margin: "100px", justifyContent: "center"}}>Favorieten</h2>
{favoriteRecipes.length === 0 ? (
<p style={{display: "flex", fontSize: "40px", margin: "100px", justifyContent: "center"}}>Geen favorieten opgeslagen.</p>
) : (
<div className="favo-list">
{favoriteRecipes.map((r) => (
<RecipeCard key={r.id} recipe={r} onQuickFavorite={() => navigate("/favorieten")} />
))}
</div>
)}
</div>
);
}