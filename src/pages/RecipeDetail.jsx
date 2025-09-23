import { useParams } from "react-router-dom";
import "../styles/Pages.css";

export default function RecipeDetail({ recipes, favoriteIds, toggleFavorite }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));
  const isFavorite = favoriteIds.includes(recipe.id);

 return (
  <div className="detail">
    <img src={recipe.image} className="detail-image" />
    <div className="details">
      <h2>{recipe.title}</h2>
      <h3>Ingrediënten</h3>
      <ul>
        {recipe.ingredients.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <h3>Bereiding</h3>
      <p>{recipe.steps}</p>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite ? "Verwijder uit favorieten" : "Voeg toe aan favorieten"}
      </button>
    </div>
  </div>
);

}
