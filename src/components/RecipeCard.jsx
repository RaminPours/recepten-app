import { Link } from "react-router-dom";
import "../styles/RecipeCard.css";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <Link to={`/recept/${recipe.id}`}>
        <img src={recipe.image} />
      </Link>
      <div className="info">
        <h3>{recipe.title}</h3>
        <p>{recipe.country}</p>
      </div>
    </div>
  );
}
