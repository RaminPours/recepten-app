import { useParams } from "react-router-dom";
import "../styles/Pages.css";

export default function RecipeDetail({ recipes, favoriteIds, toggleFavorite }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recept niet gevonden.</p>;

  const isFavorite = favoriteIds.includes(recipe.id);

  return (
    <div className="detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} />
      <h3>Ingrediënten</h3>
      <ul>
        {recipe.ingredients.map((i) => <li key={i}>{i}</li>)}
      </ul>
      <h3>Bereiding</h3>
      <p>{recipe.steps}</p>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite ? "Verwijder uit favorieten" : "Voeg toe aan favorieten"}
      </button>
    </div>
  );
}
