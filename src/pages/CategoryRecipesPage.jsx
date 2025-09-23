import { useParams } from "react-router-dom";
import RecipesPage from "./RecipesPage";

export default function CategoryRecipesPage({ recipes }) {
  const { l } = useParams();

  
  const filtered = recipes.filter((r) => r.country.toLowerCase() === l.toLowerCase());

  if (!filtered.length) {
    return <p className="geen-recept">Geen recepten gevonden voor: {l} 😥</p>;
  }

  return (
    <div className="recipe-page">
    <RecipesPage recipes={filtered} />
    </div>
    
  );
}
