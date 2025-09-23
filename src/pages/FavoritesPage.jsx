import RecipeCard from "../components/RecipeCard";

export default function FavoritesPage({ recipes, favoriteIds }) {
const favoriteRecipes = recipes.filter((r) => favoriteIds.includes(r.id));


return (
<div className="favo-page">
<h2>Favorieten</h2>
{favoriteRecipes.length === 0 ? (<p>Geen favorieten opgeslagen.</p>)
 : (<div className="favo-list">
    {favoriteRecipes.map((r) => (
<RecipeCard key={r.id} recipe={r} />
))}
</div>
)}
</div>
);
}